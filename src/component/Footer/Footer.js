import React from "react";
import style from "./Footer.module.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.list}>
        <h2>Company</h2> <br />
        <p>About us</p>
        <br />
        <p>Our offerings</p>
        <br />
        <p>Newsroom</p>
        <br />
        <p>Investors</p>
        <br />
        <p>Blog</p>
        <br />
        <p>careers</p>
        <br />
        <p>AI</p>
        <br />
        <p>Gift Cards</p>
      </div>

      <div className={style.list}>
        <h2>Products</h2>
        <br />
        <p>Ride</p>
        <br />
        <p>Drive </p>
        <br />
        <p>Deliver </p>
        <br />
        <p>Eat</p>
        <br />
        <p>Uber for Business</p>
      </div>

      <div className={style.list}>
        <h2>Global citizenship</h2>
        <br />
        <p>Safety</p>
        <br />
        <p>Diversity and Inclusion</p>
      </div>

      <div className={style.list}>
        <h2>Travel </h2>
        <br />
        <p>Airports </p>
        <br />
        <p>Cities</p>
      </div>
      <div></div>
    </div>
  );
}
