import React from "react";
import HeaderStyle from "./Header.module.css";
import Avatar from "../Dialogs/Avatar";

const Header = (props) => {
  return (
    <header className={HeaderStyle.header}>
        <Avatar user={props.author}/>
    </header>
  );
};

export default Header;