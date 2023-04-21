import React from "react";
import style from "./Navbar.module.css"
import {RiEarthFill} from "react-icons/ri"
import {TbGridDots} from "react-icons/tb"
function Navbar() {
  return (
    <header className={style.header}>
      <ul className={style.leftnav}>
        <li style={{fontSize:"x-large"}}>Uber</li>
        <li>Company</li>
        <li>Safety</li>
        <li>Help</li>
      </ul>
      <ul className={style.rightnav}>
        <li className={style.language}><RiEarthFill/> EN</li>
        <li className={style.product}><TbGridDots/> Products</li>
        <li>Login</li>
        <li className={style.signup}>Signup</li>
      </ul>
    </header>
  );
}

export default Navbar;
