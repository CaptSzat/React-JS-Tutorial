import React from "react";

function Child(props){
    return(
        <>
        <h1>{props.message}</h1>
        <h2>{props.output}</h2>
        </>
    )
}

export default Child;