import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {LuLogIn} from 'react-icons/lu'
import {AiOutlineLogin} from 'react-icons/ai'
import Image from 'next/image'
import {BiLogOut} from 'react-icons/bi'
import OffCanvas from './OffCanvas'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { login,logout } from '../stores/auth'
import { setExactUsername,setLoginData} from '../stores/auth'
import classes from './NavDark.module.css'
function NavDark() {
  // const dispatch = useDispatch()

  // const {isLoggedIn} = useSelector(state => state.auth)
  // const {loginData} = useSelector(state => state.auth)
  // // const {exactUsername} = useSelector(state => state.auth)
  // const exactUsername = localStorage.getItem("exactUsername")
  // console.log(exactUsername);

  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // const isLogin = localStorage.getItem("isLoggedIn")

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('http://localhost:5055/api/users/getusers'); 
  //       const users = await response.data;
  //       setData(users); 
  //       setLoading(false); 
  //       users.forEach((user) => {
  //         if(user.email == loginData.Email){
  //           dispatch(setExactUsername(user.username))
  //       }
  //     })
  //     } catch (error) {
  //       console.error('API isteği başarısız:', error);
  //     }
  //   }

  //   fetchData(); 
  // }, []);

  // const handleClick = async () => {
  //   try {
  //     localStorage.removeItem("isLoggedIn")
  //     localStorage.removeItem("exactUsername")
  //     fetch('http://localhost:5055/api/account/logout', {
  //       method: 'POST', 
  //     })
  //       .then(response => {
  //         if (response.status === 200) {
  //           console.log("succedd")
  //           window.location.href="http://localhost:3000/login"
  //           dispatch(logout())
  //         } else {
  //           console.log("unsuceedd")
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       });
  //   }
  //   catch (error) {
  //     console.error('API isteği başarısız:', error);
  //   }
  // }

  return (
    <>
    <div className={classes.navdark__wrap} id='start'>
        <nav className={`${classes.navdark} container`}>
        <Link className={classes["navdark__logo-wrap"]} href='/' style={{textDecoration:'none'}}>
        <Image src='/images/aclogo.png' alt='academy students logo' className={classes.navdark__logo} width={80} height={49}/>

            {/* <img src='/images/aclogo.png' alt="" className={classes.navdark__logo} /> */}
            <p style={{position:'relative'}}> <span>|</span>Academy Students <span className={classes.navdark__beta} style={{fontSize:'1.2rem'}}>beta</span></p>
          </Link>
            
            <ul className={classes["navdark__item-wrap"]}>
            <>
              {/* {isLogin ? ( */}
                <>
                {/* <div className="navdark__item">
                <p>Xoş gəlmisən,{exactUsername}</p>   
              </div>
                <div className="navdark__item">
                <Link onClick={handleClick}><BiLogOut/> Logout</Link>                               
              </div> */}
                {/* <OffCanvas/> */}
              
                </>
                
              {/* )  : ( */}

                <>
                {/* <div className={classes.navdark__item}>
                <Link href='/login'><LuLogIn/> Login</Link>                               
              </div>
              <div className={classes.navdark__item}>
                <Link href='/register'><AiOutlineLogin/> Register</Link>    
              </div> */}
              <div className={classes.navdark__item}>
               <Link href='#kurslar'>Kurslar</Link>
             </div><div className={classes.navdark__item}>
             <Link href='#about'>Haqqımızda</Link>
             </div>
            <div className={classes.navdark__item}>
               <Link href='#contact'>Əlaqə</Link>
             </div>
             <div className={classes.navdark__item}>
               <Link href='/soon'><LuLogIn/>Hesab</Link>
             </div>
                </>
              {/* )} */}
              </>

                {/* <li className="navdark__item" onClick={handleClick}><a href="#home">Ana Səhifə</a></li>
                <li className="navdark__item"><Link to="/courses">Kurslar</Link></li>
                <li className="navdark__item"><Link to="/about">Haqqımızda</Link></li>
                <li className="navdark__item"><Link to="/contact">Əlaqə</Link></li> */}
                
            </ul>
        </nav>
    </div>
    <a href="#start" className={classes.up_btn}><i className="fa-solid fa-chevron-up"></i></a>
    </>
    
  )
}

export default NavDark