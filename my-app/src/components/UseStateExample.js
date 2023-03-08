import React from "react";

function UseStateExample() { 
    const [ greet, setGreet ] = React.useState("Hello");
    console.log(React.useState("Hello"));
    return(
        <h1> {greet} </h1>
    )
 }

 export default UseStateExample;