import React from 'react'
import Course from './Course'
import LoadingScreen from './LoadingScreen';
import { useState,useEffect } from 'react';
import axios from 'axios';
import classes from './OtherOfficeCourses.module.css'
import { data2 } from './Data';

function OtherOfficeCourses() {
  return (
    <>
    
      <div className={`${classes.courses} container`} id='kurslar'>
      <div className={classes.courses__inner}>
        <p className={classes.courses__name}>Digər Ofis Proqramları Kursları</p>
        <div className={classes["border-bottom"]}></div>
        <div className={classes.courses__office}>
            {data2.map((course,index) => {
                return <Course key={index} course={course}/>
            })}
        </div>
      </div>
      </div>
    
    </>
    
  )
}

export default OtherOfficeCourses