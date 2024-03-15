// import React from 'react'
// import { Link, } from 'react-router-dom'
// import { useState,useEffect, } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas'; 
// import {FaBars, FaUser} from 'react-icons/fa'
// import {AiOutlineClose} from 'react-icons/ai'
// import { useSelector,useDispatch } from 'react-redux';
// import { BiLogOut } from 'react-icons/bi';
// import { logout } from '../stores/auth';
// import { FaUserCircle } from "react-icons/fa";
// import { setRole } from '../stores/auth';
// import axios from 'axios';
// import classes from './OffCanvas.module.css'
 

// function Nav() {
//   const [show, setShow] = useState(false);
//   const offcanvas = document.querySelector(".offcanvas");
//   const isLogin = localStorage.getItem("isLoggedIn")

//   const dispatch = useDispatch()
//     useEffect(() => {
//     getRole()

//   },[isLogin])

//   const {isLoggedIn} = useSelector(state => state.auth)
//   const {role} = useSelector(state => state.auth)
//   // const {exactUsername} = useSelector(state => state.auth)
//   const exactUsername = localStorage.getItem("exactUsername")



    

//   const handleShow = () =>{
//     setShow(!show);
//   } 
//   const handleClose = () => setShow(false);
//   const handleClick = async () => {
//     try {
//       localStorage.removeItem("isLoggedIn")
//       localStorage.removeItem("exactUsername")
//       fetch('http://localhost:5055/api/account/logout', {
//         method: 'POST',
//       })
//         .then(response => {
//           if (response.status === 200) {
//             console.log("succedd")
//             window.location.href="http://localhost:3000/login"
//             dispatch(logout())
//           } else {
//             console.log("unsuceedd")
//           }
//         }
//         )
//         .catch(error => {
//           console.log(error)
//         });
//     }
//     catch (error) {
//       console.error('API isteği başarısız:', error);
//     }
//   }

//   const token = localStorage.getItem("token");
//   const getRole = async(e) => {
//     const token = JSON.stringify(localStorage.getItem("token"))
//     try{
//       const response = await axios.post("http://localhost:5055/api/roles/getrole",e);
//       console.log("Succedd",response.data)
//       dispatch((formData))
//       setFormData({});
//       navigate("/login")
//     }catch(e){
//       console.error(e);
//     }
//   }
  
//   return (
//     <>
//      <>
//       <button className={`nav__btn ${classes.offcanvas__btn}`} onClick={handleShow}>
//         <FaBars/>
//       </button>
//       <div className={classes.offcanvas}>
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Body className={classes.offcanvas__body}>
//             <div className={classes.offcanvas__item}>
//                 <FaUserCircle/>
//                  <p>{exactUsername}</p>
//                 <p>{JSON.stringify(role)}</p>
//                </div>
//                <div className={classes.nav__item} >
//                <Link onClick={handleClick}><BiLogOut/> Logout</Link>
//              </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//       </div>
      
//     </>
//     <a href="#home" className={classes.up_btn}><i className="fa-solid fa-chevron-up"></i></a>
//     </>
    
//   )
// }

// export default Nav