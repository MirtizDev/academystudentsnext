import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Nav from './Nav'
import classes from './About.module.css'
import Image from 'next/image';

function About() {
  // const targetRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0,
  //   };

  //   const callback = (entries, observer) => {
  //     entries.forEach(entry => {
  //       if(targetRef.current)
  //       {
  //         if (entry.isIntersecting) {
  //           // Element görünür hale geldiğinde 'show' sınıfını ekler.
  //           targetRef.current.classList.add(classes.show);
  //         } else {
  //           // Element görünmez hale geldiğinde 'show' sınıfını kaldırır.
  //           targetRef.current.classList.remove(classes.show);
  //         }
  //       }
        
  //     });
  //   };

  //   const observer = new IntersectionObserver(callback, options);

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //       observer.disconnect();
  //     }
  //   };
  // }, []);

  return (
    <div className='about' id='about'>
      <div className={classes.about__header}>
        <p className={classes.about__name}>Haqqımızda</p>
        <div className={`${classes["border-bottom"]} ${classes.about__border}`}></div>
      </div>
      <div className={classes.about__content}>
        <Image src="/images/aclogo.png" alt="Academy students logo" className={classes.about__logo} width={350} height={205}/>
          {/* <img /> */}
          <p className={classes.about__text}>
            Academy Students artıq 10 ildir ki,ofis proqramları və qrafik dizayn tədrisini həyata keçirir.Məqsəd tələbələri günümüzdəki müasir iş həyatındakı texnologiyalara uyğunlaşdırmaq,dizayn bacarıqlarını,ideyalarını genişləndirmək,dizayn proqramları ilə işləməyi öyrətmək və bazarda axtarılan kadr yetişdirməkdir.Bu illər ərzində 100-lərlə tələbə kurslarımızı bitirib işə başlamış,öz işlərində nümunəvi şəxslərə çevrilmişlər.
          </p>
        </div>
    </div>
  )
}

export default About