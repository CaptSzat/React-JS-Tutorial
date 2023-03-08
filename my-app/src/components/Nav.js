import React from "react";

function Nav(props){
    const ulStyle ={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        listStyleType: "none",
        gap: "2rem"
      }

    return (
        <nav className="main-nav">
            <ul style={ulStyle}>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fourth}</li>
            </ul>
        </nav>
    )
}

export default Nav;