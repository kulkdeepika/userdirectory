import React from 'react';

function EmployeeRow(props){
    return(
        <div className="row" id="employeeRowDiv">
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