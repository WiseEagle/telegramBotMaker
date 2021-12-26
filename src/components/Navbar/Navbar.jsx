import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="#">T.Manage</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    );

}

export default Navbar;