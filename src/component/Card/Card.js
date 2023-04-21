import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiKey } from "react-icons/hi";
import style from "./Card.module.css";
import Ride from "../Ride";
import Drive from "../drive";
import Rent from "../Rent";

function Card() {
  const [showcount, setShowCount] = useState(0);
  return (
    <div
      className={
        showcount == 0 ? style.ride : showcount == 1 ? style.drive : style.rent
      }
    >
      <div className={style.main}>
        <ul className={style.listItem}>
          <li onClick={() => setShowCount(0)} className={style.list}>
            <AiFillCar /> Ride
          </li>
          <li onClick={() => setShowCount(1)} className={style.list}>
            {" "}
            <BsFillBarChartFill />
            Drive or deliver
          </li>
          <li onClick={() => setShowCount(2)} className={style.list}>
            <HiKey /> Rent your fleet
          </li>
        </ul>
        {showcount == 0 ? <Ride /> : showcount == 1 ? <Drive /> : <Rent />}
      </div>
    </div>
  );
}

export default Card;
