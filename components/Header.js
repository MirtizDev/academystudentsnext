import React from 'react'
import Nav from './Nav'
import { useRef,useEffect,useState } from 'react'
import Link  from 'next/link';
import NavDark from './NavDark';
import Typewriter from 'typewriter-effect';
import classes from './Header.module.css'
import SimpleBottomNavigation from './BottomNavigation';
import NavDarkResponsive from './NavDarkResponsive';


function Header() {

    useEffect(() => {
      setTimeout(() => {
        const movingDiv = document.querySelector("#content");
          movingDiv.style.top = 50 + "%";
          movingDiv.style.opacity = 1;
      }, 300); 
    },[])
    const width = window.innerWidth

  
 
   

  // try{
  //   window.addEventListener('scroll',function(){
  //     let value = 1 + window.scrollY/-600;
  //     let video = document.querySelector("#video")
  //     video.style.opacity = value;
  //   })
  // }catch(err){
  //   console.log(err)
  // }
   
    
  return (
    <>
      <header className={classes.header} id='home'>
        {width > 600 ? (<NavDark/>) : (<NavDarkResponsive/>)
        }
          <video autoPlay muted loop className={classes.header__video} id='video'>
            <source src='/images/video3.mp4' type='video/mp4' />
          </video>
          <div className={classes.header__content} id='content'>
              <h1>Academy Stundents-ə Xoş Gəlmisiniz</h1>
              <div>
                <p><Typewriter
                  options={{
                    strings: ['Qrafik dizaynı', 'Ofis proqramlarını'],
                    autoStart: true,
                    loop: true,
                  }}/><span>asanlıqla öyrən</span></p>
              </div>
              <Link href='#kurslar'><button className={classes.bn5}>Kursları Kəşf Et</button></Link>
          </div>
      </header>
      <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    </>
   
  )
}

export default Header