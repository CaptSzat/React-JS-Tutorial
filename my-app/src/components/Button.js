// import React from "react";

// function addCart(cartNumber){
//     cartNumber += 1;
//     return cartNumber;
// }
// let cartAmount = 0;

// function Button(){
//     const clickHandler = () => console.log('clicked')
//     return(
//         <div>
//             <button onClick={clickHandler}>Press Me!</button>
//             <p>{cartAmount}</p>
//         </div>
//     )
// }

// export default Button;

import React from "react";

function Button(){
    let cartAmount = 0;
    const clickHandler = () => {
        cartAmount++;
        console.log(cartAmount)
    };
    return(
        <div>
            <button onMouseOver={clickHandler}>Press Me!</button>
        </div>
    )
}

export default Button;