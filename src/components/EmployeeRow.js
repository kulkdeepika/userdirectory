import React from 'react';

const rowStyleEven = {
    fontSize: "1.5rem",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#F8F8F8"
}

const rowStyleOdd = {
    fontSize: "1.5rem",
    marginTop: "10px",
    marginBottom: "10px"
}

function EmployeeRow(props){
    return(
        <div className="row text-center" style={props.index % 2 === 0 ? rowStyleEven : rowStyleOdd} id="employeeRowDiv">
            <div className="col-2" id="imageDiv">
               <img alt="" src={props.img}></img>
            </div>

            <div className="col-2" id="nameDiv">
                {props.name}
            </div>

            <div className="col-2" id="phoneDiv">
                {props.phone}
            </div>

            <div className="col-4" id="emailDiv">
                {props.email}
            </div>

            <div className="col-2" id="dobDiv">
                {props.dob}
            </div>
        </div>
    )
}

export default EmployeeRow;