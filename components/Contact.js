import React from 'react'
import Nav from './Nav'
import classes from './Contact.module.css'

function Contact() {
  return (
    <div className={classes.contact} id='contact'>
      <div className={classes.contact__header}>
        <p className={classes.contact__name}>Əlaqə</p>
        <div className={`${classes["border-bottom"]} ${classes.contact__border}`}></div>
      </div>
      <div className={classes.contact__inner}>
        <div className={classes.contact__map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.271589353255!2d49.86815831966252!3d40.40283385648596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ee9253a65%3A0x29160f1a81905e71!2sNariman%20Narimanov!5e0!3m2!1sen!2saz!4v1698564506808!5m2!1sen!2saz" height='646' style={{border:'none',width:'100%'}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={classes.contact__info}>
          <h2>Müraciət et</h2>
          {/* <ul className='contact__list'>
              <li className='contact__list-item'><a href="https://wa.me/+9940777648912" className='contact__link' target='_blank'><i className="fa-brands fa-whatsapp"></i>+994 77 764 89 12</a></li>
              <li className='contact__list-item'><a href="https://www.instagram.com/academy_students_/" className='contact__link' target='_blank'><i className="fa-brands fa-instagram"></i>academy_students_</a></li>
              <li className='contact__list-item'><a href="tel:+9940777648912" className='contact__link'><i className="fa-solid fa-phone"></i>+994 77 764 89 12</a></li>
          </ul> */}
          <form method='Post' className={classes.contact__form}>
            <div >
              <label htmlFor="Name">Ad</label>
              <input type="text" id='Name' name='Name' />
            </div>
            <div >
              <label htmlFor="Surname">Soyad</label>
              <input type="text" id='Surname' name='Surname' />
            </div>
            <div>
              <label htmlFor="Number">Telefon</label>
              <input type="tel" id='Number' name='Number' />
            </div>
            <div >
              <label htmlFor="Email">Email</label>
              <input type="tel" id='Email' name='Email' />
            </div>
            <button type='submit'>Göndər</button>
          </form>
        </div>
      </div>
      
      

    </div>
  )
}

export default Contact