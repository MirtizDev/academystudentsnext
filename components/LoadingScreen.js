import React from 'react'
import classes from './LoadingScreen.module.css'

function LoadingScreen() {
    
  return (
    <div className={classes.loading}>
      <div className={classes.loading__content}>
        <img src="images/aclogo.png" alt="" className={classes.loading__logo}/>
        <p className={classes.loading__text}> | Academy Students</p>
      </div>
    </div>
  )
}

export default LoadingScreen