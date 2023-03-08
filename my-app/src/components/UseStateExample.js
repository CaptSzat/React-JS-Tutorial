import React from "react";

function UseStateExample() { 
    const [ word, setWord ] = React.useState("Eat");
    const handleClick = () => setWord("Drink");
    return(
        <>
        <h1> {word + " at Little lemon"} </h1>
        <button onClick={handleClick}>Change the word!</button>
        </>
    )
 }

 export default UseStateExample;