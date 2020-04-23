import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeRow from './components/EmployeeRow';
import TableHeadings from './components/TableHeadings';
import API from './utils/API';
import moment from 'moment';

class App extends Component {
  
  state = {
    search : "",
    results: [],
    filteredResults: [],
    sort: false
  }

  originalResults = [];

  componentDidMount(){
    API.getEmployees()
      .then(res => {
        console.log(res);
        this.setState({results: res.data.results});
        console.log(this.state.results);
        this.originalResults = res.data.results;
      })
  }

  findEmployee = event => {
    console.log("fired");

    const value = event.target.value;
    const name = event.target.name;
    console.log(value);

    this.setState({
      [name] : value
    }, () => {
      this.setState({
        filteredResults: this.state.results.filter(emp => emp.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || emp.name.last.toLowerCase().includes(this.state.search.toLowerCase()))
      })
  
    })
  }

  sortByName = (event) => {
    this.setState({
      sort: !this.state.sort
    }, () => {

      if(this.state.sort){
        this.setState({
          results: this.state.results.slice().sort((a,b)=> (a.name.first > b.name.first ? 1 : -1))
        })
      }
      else{
        this.setState({
          results: this.originalResults
        })
      }
    })
}
  
  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar findEmployee={this.findEmployee} value={this.state.search}/>
        <div className="container-fluid" style={{margin: "10px"}}>
          <TableHeadings sortByName={this.sortByName} sort={this.state.sort}/>

        {
          this.state.search === "" ?
            this.state.results.map((emp,i) => (
                <EmployeeRow img={emp.picture.thumbnail} name={`${emp.name.first} ${emp.name.last}`} phone={emp.phone} email={emp.email} dob={moment(emp.dob.date, moment.ISO_8601).format("MM-DD-YYYY")} key= {emp.login.uuid} index={i}/>
            )) : 

            this.state.filteredResults.map((emp,i) => (
              <EmployeeRow img={emp.picture.thumbnail} name={`${emp.name.first} ${emp.name.last}`} phone={emp.phone} email={emp.email} dob={moment(emp.dob.date, moment.ISO_8601).format("MM-DD-YYYY")} key= {emp.login.uuid} index={i}/>
          ))
          
        }
          
        </div>
      </div>
    )
  }
}
export default App;


