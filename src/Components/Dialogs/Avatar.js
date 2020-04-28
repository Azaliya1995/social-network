import FriendsStyle from "../Friends/Friends.module.css";
import React from "react";


function Avatar() {
    return (
        <img className={FriendsStyle.avatar}
             src="https://placekitten.com/100/50"/>
    );
}

export default Avatar;