import React from 'react'
import LoadingScreen from './LoadingScreen'
import Course from './Course'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ScrollBar from './ScrollBar'
import classes from './Courses.module.css'
import {data1} from './Data'
import {data2} from './Data'
import Nav from './Nav'
import Footer from './Footer'

function Courses() {
  // const [loading, setLoading] = useState(true);

  

  // useEffect(() => {
  //   // API'den verileri çekmek için bir etkileşimli işlev kullanın
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('http://localhost:5055/api/course'); 
  //       const courses = await response.data;
  //       let designCourses = courses.filter((course) => course.category == "design")
  //       let officeCourses = courses.filter((course) => course.category == "office")
  //       setData1(designCourses);
  //       setData2(officeCourses)
  //       setLoading(false); 
  //     } catch (error) {
  //       console.error('API isteği başarısız:', error);
  //     }
  //   }

  //   fetchData(); // Verileri çekme işlemini başlatın
  // }, []);
  return (
    <>
    <ScrollBar/>
    {/* {loading ? (
      <LoadingScreen/>
    ) :  */}
    
    <div className='container' id='kurslar'>
    <div className={classes.courses__inner}>
      <p className={classes.courses__name}>Qrafik Dizayn Kursları</p>
      <div className={classes["border-bottom"]}></div>
      <div className={classes.courses__design}>
          {data1.map((course,index) => {
              return <Course key={index} course={course}/>
          })}
      </div>
    </div>
      <div className={classes.courses__inner}>
        <p className={classes.courses__name}>Ofis Proqramları Kursları</p>
        <div className={classes["border-bottom"]}></div>
        <div className={classes.courses__office}>
          {data2.map((course,index) => {
              return <Course key={index} course={course}/>
          })}
        </div>
      </div>
  </div>
{/* } */}
    </>
    
    
  )
}

export default Courses