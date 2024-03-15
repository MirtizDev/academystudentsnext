import React from 'react'
import Course from './Course'
import LoadingScreen from './LoadingScreen';
import { useState,useEffect } from 'react';
import axios from 'axios';
import classes from './OtherDesingCourses.module.css'
import { data1 } from './Data';

function OtherDesignCourses() {
  return (
    <>
    
      <div className={`${classes.courses} container`} id='kurslar'>
      <div className={classes.courses__inner}>
        <p className={classes.courses__name}>Digər Qrafik Dizayn Kursları</p>
        <div className={`${classes.courses__name} ${classes.course__border}`}></div>
        <div className={classes.courses__design}>
            {data1.map((course,index) => {
                return <Course key={index} course={course}/>
            })}
        </div>
      </div>
      </div>
    
    </>
    
  )
}

export default OtherDesignCourses