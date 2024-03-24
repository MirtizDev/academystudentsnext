import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './Nav.module.css'

function NavResponsive() {
  return (
    <Link className={classes["nav__logo-wrap"]} href='/' style={{textDecoration:'none'}} id='start1'>
        <Image src='/images/aclogo.png' alt='academy students logo' className={classes.nav__logo} width={60} height={49}/>
        {/* <img src='/images/aclogo.png' alt="" className={classes.nav__logo} /> */}
        <p style={{position:'relative'}}> <span>|</span>Academy Students <span className={classes.navdark__beta} style={{fontSize:'1.2rem'}}>beta</span></p>
    </Link>
  )
}

export default NavResponsive