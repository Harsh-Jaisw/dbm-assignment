import React from "react";
import style from "./Footer.module.css";
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";
import {CiLocationOn} from "react-icons/ci"
import {RiEarthFill} from "react-icons/ri"

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.description}>
        <div className={style.list}>
          <h2>Company</h2>
          <p>About us</p>
          <p>Our offerings</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Blog</p>
          <p>careers</p>
          <p>AI</p>
          <p>Gift Cards</p>
        </div>
        <div className={style.list}>
          <h2>Products</h2>
          <p>Ride</p>
          <p>Drive </p>
          <p>Deliver </p>
          <p>Eat</p>
          <p>Uber for Business</p>
        </div>
        <div className={style.list}>
          <h2>Global citizenship</h2>
          <p>Safety</p>
          <p>Diversity and Inclusion</p>
        </div>
        <div className={style.list}>
          <h2>Travel </h2>
          <p>Airports </p>
          <p>Cities</p>
        </div>
        </div>
       <div className={style.socialIcons}>
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsLinkedin />
        <BsInstagram />
        <div className={style.location}>
        <RiEarthFill/> English
        <CiLocationOn/> Kanpur
        </div>
      </div>
      </div>
    </>
  );
}
