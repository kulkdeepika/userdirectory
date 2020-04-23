import React from 'react';

const headerStyle = {
    boxShadow: "6px 6px 6px #333", 
    backgroundColor: "#111754", 
    borderBottom: "5px solid", 
    borderColor:"#9B182E", 
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
}

function Header(){
    return(
        <>
        <nav className="navbar navbar-light d-flex justify-content-center flex-column" style={headerStyle}>
        <span className="navbar-brand h1" style={{fontSize: "2rem", color: "white"}}>Employee Directory  <i class="far fa-address-book"></i></span>
        <p className="nav-item">
                <p className="nav-link text-white" style={{fontSize: "1rem", fontFamily: "Arial, Helvetica, sans-serif"}}>Click 'Name' column to sort by name (click back to restore), OR, use the search box to narrow your results.</p>
        </p>
        </nav>
        </>
    )
}

export default Header;