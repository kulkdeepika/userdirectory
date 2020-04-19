import React from 'react';

function SearchBar(props){
    return (
        <>
        <div className="row justify-content-center bg-light" style={{height: "5rem"}}>
            <div className="col-4">
                <div className="input-group input-group-lg">
                    <input 
                        type="text" className="form-control align-middle border border-info"
                        placeholder="Search" 
                        style={{marginTop: "13px"}}
                        value={props.value}
                        onChange={props.findEmployee}
                        name="search"
                    >
                    </input>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchBar;