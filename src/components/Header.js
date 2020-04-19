import React from 'react';

function Header(){
    return(
        <>
        <nav className="navbar navbar-light bg-info d-flex justify-content-center">
        <span className="navbar-brand h1" style={{fontSize: "2.5rem", color: "white"}}>Employee Directory</span>
        </nav>
        </>
    )
}

export default Header;