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
import SimpleBottomNavigation from './BottomNavigation'

function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  const width = global.innerWidth

  return (
    
    <div className={classes.home__layout}>
        <div className={classes.home__content}>
          {loading ? <LoadingScreen/> : 
          (
            <>
            <Header/>
            <Courses/>
            <About/>
            <Graduates/>
            <Contact/>
            <Footer/>
            {width < 600 ? (<SimpleBottomNavigation/>) : (<ScrollBar/>)}
            </>
          )}
        </div>
    </div>
  )
}

export default Home