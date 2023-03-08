import React from "react";

function addCart(cartNumber){
    cartNumber += 1;
    return cartNumber;
}
let cartAmount = 0;

function Button(){
    return(
        <div>
            <button onClick={addCart(cartAmount)}>Press Me!</button>
            <p>{cartAmount}</p>
        </div>
    )
}

export default Button;