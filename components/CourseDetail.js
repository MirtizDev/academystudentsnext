import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import LoadingScreen from './LoadingScreen'
import Footer from './Footer'
import OtherDesignCourses from './OtherDesingCourses';
import OtherOfficeCourses from './OtherOfficeCourses';
import classes from './CourseDetail.module.css'
import NavDark from './NavDark';
import Image from 'next/image';
function CourseDetail({data}) {
  console.log(data)
  return (
    <div>
       
        <div>
          <Nav/>
          <div className="container">
            <div className={classes["course-detail"]}>
            <Image src={`/images/${data[0].img}`} className={classes["course-detail__img"]} width={270} height={270}/>
              <div className={classes["course-detail__content"]}>
                <h2 className={classes["course-detail__name"]}>{data[0].name}</h2>
                <p className={classes["course-detail__description"]}>{data[0].description}</p>
                <p className={classes["course-detail__price"]}>{data[0].price}.00&#10969;</p>
              </div>
            </div>
          </div>
          {data.id == 1 || data.id == 2 || data.id == 3 || data.id == 4 ? (<OtherDesignCourses/>) : (<OtherOfficeCourses/> )}
          
          <Footer/>
        </div>
         </div>
  );
}

export default CourseDetail