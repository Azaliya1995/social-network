import React from "react";
import HeaderStyle from "./Header.module.css";
import Avatar from "../Dialogs/Avatar";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={HeaderStyle.header}>
            <Avatar user={props.author}/>

            <div className={HeaderStyle.loginBlock}>
                {props.isAuth ?
                    <div>{props.login}
                    <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;