import React from "react";
import style from "./service.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Service() {
  return (
    <div>
      <div className={style.head}>
        <h1>Ride with Uber</h1>
      </div>

      <div className={style.ride}>
        <div className={style.uber}>
          <div className={style.auto}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"
              alt=""
            />
            <div>
              <h2>Uber Moto</h2>
              <p>Get affordable uber auto ride with no hangling.</p>
            </div>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>

          <div className={style.auto}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png"
              alt=""
            />
            <div>
              <h2>Uber Moto</h2>
              <p>Get affordable uber auto ride with no hangling.</p>
            </div>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>

        <div className={style.uber}>
          <div className={style.auto}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png"
              alt=""
            />
            <div>
              <h2>Uber Moto</h2>
              <p>Get affordable uber auto ride with no hangling.</p>
            </div>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>

          <div className={style.auto}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png"
              alt=""
            />
            <div>
              <h2>Uber Intercity</h2>
              <p>Get affordable uber auto ride with no hangling.</p>
            </div>
            <span className={style.arrow}>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className={style.head}>
        <h1> Focused on safety, wherever you go</h1>
      </div>

      <div className={style.safe}>
        <div className="img">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_499,h_333/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
            alt=""
          />
          <h3>Our commitment to your safety</h3>
          <span className={style.content}>
            With every safety feature and every standard in our Community
            Guidelines, we're committed to helping to create a safe environment
            for our users.
          </span>
        </div>
        <div className={style.img}>
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_499,h_333/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
            alt=""
          />
          <h3>Setting 10,000+ cities in motion</h3>
          <span className={style.content}>
            The app is available in thousands of cities worldwide, so you can
            request a ride even when you’re far from home.
          </span>
        </div>
      </div>

      <div className={style.app}>
        <h1>There’s more to love in the apps</h1>
        <div className={style.down}>
          <div className={style.imgs}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png"
              alt=""
            />
            <p>Downlode the Uber App</p>
          </div>

          <div className={style.imgs}>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png"
              alt=""
            />
            <p>Downlode the Uber App</p>
          </div>
        </div>
      </div>
    </div>
  );
}
