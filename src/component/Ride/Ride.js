import React from 'react'
import style from './Ride.module.css'
function Ride() {
  return (
    <div className={style.main}>
      <div className={style.ride}>Request a ride now</div>
    <input className={style.inp}placeholder='Enter pickup location'/>
    <input className={style.inp}placeholder='Enter destination'/>
   <div className={style.bigDiv}>
     <span className={style.req}>Request now</span>
    <span className={style.sch}>Schedule for later</span></div>
    </div>
  )
}

export default Ride
