import React from "react";

function formatName(firstName, surname){
    return firstName + " " + surname;
}
function Main(){
    return(
        <p>
            {formatName("Tom", "Szat")}
        </p>
    )
}

export default Main;