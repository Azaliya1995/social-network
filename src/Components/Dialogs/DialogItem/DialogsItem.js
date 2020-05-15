import React from "react";
import DialogsStyles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../Avatar";

const DialogItem = props => {
    let path = "dialogs/" + props.id;


    return (
        <div className={DialogsStyles}>
            <NavLink to={path}>
                <div className={DialogsStyles.friendAvatar}>
                    <Avatar user={props.author}/>
                    {props.name}
                </div>
            </NavLink>
        </div>

    )
        ;
};

export default DialogItem;
