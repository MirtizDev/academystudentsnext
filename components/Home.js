import React, { useEffect } from 'react'
import Header from './Header'
import Courses from './Courses'
import Footer from './Footer'
import Nav from './Nav'
import About from './About'
import NavDark from './NavDark'
import Contact from './Contact'
import LoadingScreen from './LoadingScreen'
import { useState } from 'react'
import CourseDetail from './CourseDetail'
import ScrollBar from './ScrollBar'
import Course from './Course'
import classes from './Home.module.css'
import Graduates from './Graduates'

function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  return (
    
    <div className={classes.home__layout}>
        <div className={classes.home__content}>
          <ScrollBar/>
          {loading ? <LoadingScreen/> : 
          (
            <>
            <Header/>
            <Courses/>
            <About/>
            <Graduates/>
            <Contact/>
            <Footer/>
            </>
          )}
        </div>
    </div>
  )
}

export default Home