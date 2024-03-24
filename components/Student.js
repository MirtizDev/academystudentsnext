import React from 'react'
import classes from './Student.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRef,useEffect } from 'react';

function Student({student}) {
  const targetRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
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
  return (
      <Link href={student.link} className={classes.student__link} ref={targetRef} target='_blank'>
          <div class={classes.story}>
              <figure class={classes.story__shape}>
                  <Image src={`/images/${student.img}`} alt="Person on a tour" class={classes.story__img} width={200} height={200}/>
                  <figcaption class={classes.story__caption}>{student.name}</figcaption>
              </figure>
          </div>
      </Link>
  )
}

export default Student