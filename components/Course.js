import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import classes from './Course.module.css'
import Link from 'next/link';
import Image from 'next/image';
function Course({course}) {

  const targetRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(targetRef.current)
        {
          if (entry.isIntersecting) {
            targetRef.current.classList.add(classes.show);
          } else {
            targetRef.current.classList.remove(classes.show);
          }
        }
        
      });
    };

    const observer = new IntersectionObserver(callback, options);


    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
        observer.disconnect();
      }
    };
  }, []);


  const linkPath = `/courses/${course.id}`;
  const string = 'classes.course__'+course.id
  const className = `${classes.course +' '+classes[`course__${course.id}`]}`  

  return (
    <>
    <Link href={linkPath} className={classes.course__link}>
      <div className={className} ref={targetRef}>
          <p className={classes.course__name}>{course.name}</p>
          <Image src={`/images/${course.img}`} alt={course.name} className={classes.course__img} width={100} height={98}/>
          {/* <img src={`/images/${course.img}`} className={classes.course__img}/> */}
          <ul className={classes.course__list}>
            <li className={classes["course__list-item"]}>Müddət:1 ay</li>
            <li className={classes["course__list-item"]}>Video təqdim ol unur</li>
            <li className={classes["course__list-item"]}>Yüksək Keyfiyyət</li>
            <li className={classes["course__list-item"]}>Səmərəli Qiymət</li>
          </ul>
          <p className={classes.course__price}>{course.price}.00&#10969;</p>
      </div>
    </Link>
      
    </>
  )
}

export default Course