import React from 'react';

function TableHeadings(props){
    return(
        <div className="row border font-weight-bold" style={{marginTop: "10px"}}>
            <div className="col-2">
                Image
            </div>

            <div className="col-2" style={{cursor: "pointer"}} onClick={props.sortByName}>
                Name
            </div>

            <div className="col-2">
                Phone Number
            </div>

            <div className="col-4">
                E-mail
            </div>

            <div className="col-2">
                DOB
            </div>
        </div>
    )
}

export default TableHeadings;