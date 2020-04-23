import React from 'react';
import "../Row.css"

function EmployeeRow(props){
    return(
        <div className="row text-center rowStyleEven" style={props.index % 2 === 0 ? {backgroundColor: "#F0F0F0"} : {backgroundColor: "aliceblue"}} id="employeeRowDiv">
            <div className="col-2" id="imageDiv" style={{marginTop:"6px"}}>
               <img alt="" src={props.img}></img>
            </div>

            <div className="col-2" style={{marginTop:"10px"}} id="nameDiv">
                {props.name}
            </div>

            <div className="col-2" style={{marginTop:"12px"}} id="phoneDiv">
                {props.phone}
            </div>

            <div className="col-4" style={{marginTop:"12px"}} id="emailDiv">
                {props.email}
            </div>

            <div className="col-2" style={{marginTop:"12px"}} id="dobDiv">
                {props.dob}
            </div>
        </div>
    )
}

export default EmployeeRow;