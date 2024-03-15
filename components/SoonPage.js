import React from 'react'
import classes from './SoonPage.module.css'
import Image from 'next/image'
function SoonPage() {

    const handleClick = () => {
        window.location.href = '/'
    }
  return (
    <div className={classes.about__wrap}>
        <div className={classes.about} id='about'>
      <div className={classes.about__header}>
        <p className={classes.about__name}>Tezliklə əlavə olunacaq. </p>
        <div className={`${classes["border-bottom"]} ${classes.about__border}`}></div>
      </div>
        <div className="container">
      <div className={classes.about__content}>
        <Image src="/images/aclogo.png" alt="Academy students logo" className={classes.about__logo} width={350} height={205}/>
          {/* <img /> */}
          <p className={classes.about__text}>
            Bu sistem sayəsində kursumuzda olan hər bir tələbə sistemə giriş edib öz tapşırıqlarını yerinə yetirə və yükləyə biləcəklər
          </p>
        </div>
      </div>
      <button className={classes.bn5} onClick={handleClick}>Ana Səhifəyə dön</button>
    </div>
    </div>
  )
}

export default SoonPage