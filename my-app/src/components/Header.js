import React from "react";

function Header(props) { 
    return <h1>Hello {props.name}, your favourite color is {props.color} </h1>;
}

export default Header;