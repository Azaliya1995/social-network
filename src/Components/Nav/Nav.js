import React from "react";
import NavStyles from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const NavBar = (props) => {
    return (
        <nav className={NavStyles.nav}>
            <div>
                <div className={NavStyles.item}>
                    <NavLink to="/profile" activeClassName={NavStyles.activeLink}>Profile</NavLink>
                </div>
                <div className={NavStyles.item}>
                    <NavLink to="/dialogs" activeClassName={NavStyles.activeLink}>Messages</NavLink>
                </div>
                <div className={NavStyles.item}>
                    <NavLink to="/news" activeClassName={NavStyles.activeLink}>News</NavLink>
                </div>
                <div className={NavStyles.item}>
                    <NavLink to="/music" activeClassName={NavStyles.activeLink}>Music</NavLink>
                </div>
                <div className={NavStyles.item}>
                    <NavLink to="/settings" activeClassName={NavStyles.activeLink}>Settings</NavLink>
                </div>

                <div className={NavStyles.item}>
                    <h3 activeClassName={NavStyles.activeLink}>Friends</h3>
                    <Friends store={props.store}/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;