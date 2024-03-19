import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './NavDark.module.css'
function NavDarkResponsive() {
  return (
    <Link className={classes["navdark__logo-wrap"]} href='/' style={{textDecoration:'none'}}>
        <Image src='/images/aclogo.png' alt='academy students logo' className={classes.navdark__logo} width={80} height={49}/>
        {/* <img src='/images/aclogo.png' alt="" className={classes.navdark__logo} /> */}
        <p style={{position:'relative'}}> <span>|</span>Academy Students <span className={classes.navdark__beta} style={{fontSize:'1.2rem'}}>beta</span></p>
    </Link>
  )
}

export default NavDarkResponsive