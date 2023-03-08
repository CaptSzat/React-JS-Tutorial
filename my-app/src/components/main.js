import React from "react";
function formatName(firstName, surname){
    return firstName + " " + surname;
}
// const url = "../img/Profile Image.png"

// const result = <img src={url}></img>

function Main(){
    return(
        <div>
            <p>{formatName("Tom", "Szat")}</p>
        </div>
    )
}

export default Main;