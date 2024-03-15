import React from 'react'
import { graduates } from './Data'
import classes from './Graduates.module.css'
import Student from './Student'

function Graduates() {
  return (
    <>
      <div className="container" id='graduates'>
      <div className={classes.graduates}>
          <div className={classes.graduates__header}>
            <p className={classes.graduates__name}>Məzunlarımız</p>
            <div className={`${classes["border-bottom"]} ${classes.graduates__border}`}></div>
          </div>
          <div className={classes.graduates__students}>
            {graduates.map((student) => {
              return (
                <Student student={student}/>
              )
            })}
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Graduates 