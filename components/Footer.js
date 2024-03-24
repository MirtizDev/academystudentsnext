import React from 'react'
import classes from './Footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={classes.footer}>
        <div className="container">
            <div className={classes.footer__inner}>
                <p className={classes.footer__text}>Designed and powered by Murtuzov Huseyn</p>
                <div className={classes["footer__img-wrap"]}>
                    <Image src="/images/aclogo.png" alt="Academy students logo" className={classes.footer__img} width={60} height={60}/>
                    <img />
                </div>
                <ul className={classes.footer__list}>
                    <li className={classes["footer__list-item"]}><a href="https://wa.me/+9940777648912" className={classes.footer__link} target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
                    <li className={classes["footer__list-item"]}><a href="https://www.instagram.com/academy_students_/" className={classes.footer__link} target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                    <li className={classes["footer__list-item"]}><a href="tel:+9940777648912" className={classes.footer__link}><i className="fa-solid fa-phone"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer