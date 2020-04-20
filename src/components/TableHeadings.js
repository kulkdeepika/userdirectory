import React from 'react';

const headingStyle = {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "1.5rem",
    color: "#111754"
}

function TableHeadings(props){
    return(
        <div className="row border font-weight-bold text-center" style={headingStyle}>
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