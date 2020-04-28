import React from "react";
import {NavLink} from "react-router-dom";
import FriendsStyle from "./Friends.module.css";
import Avatar from "../Dialogs/Avatar";

const FriendItem = props => {
    let path = "/friends/" + props.id;

    return (
        <NavLink to={path}>
            <div className={FriendsStyle.friend}>
                <Avatar user={props.author}/>
                <div className={FriendsStyle.friendsName}> {props.name} </div>
            </div>
        </NavLink>
    )
}

export default FriendItem;