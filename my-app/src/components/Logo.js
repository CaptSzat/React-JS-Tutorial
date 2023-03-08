import React from "react";
import avatar from '../img/avatar.png';

function Logo(props) { 
    const userPic = <img src={avatar} alt="An avatar" />;
    return userPic;
}

export default Logo;