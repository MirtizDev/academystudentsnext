// import React, { useEffect } from "react";
// import { useState } from "react";
// import Nav from "./Nav";
// import { useDispatch, useSelector } from "react-redux";
// import { login, setLoginData, setExactUsername,setEmail } from "../stores/auth";
// import Alertim from "./Alertim";
// import { RedirectFunction, redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import classes from './Login.module.css'
// function Login() {
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const dispatch = useDispatch();
//   const { loginData } = useSelector((state) => state.auth);
//   let [isOpen, setIsOpen] = useState(true);
//   const token = localStorage.getItem("token")
//   const navigate=useNavigate()
//   // useEffect(() => {
//   //   // console.log(loginData);
//   // }, [loginData]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5055/api/account/login", {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify({email,password}),
//       });

//       const result = await response.json();
//       localStorage.setItem("token",result.token)

//       if (result.status == 401) {
//         setError(true);
//         setEmail('')
//         setPassword('')
//       }
//       if(result.status != 401){
//         getUser();
//         navigate("/")
//       } 
//       }
//       catch (e) {
//       console.error("Form gönderimi sırasında hata:", e);
//     }
//   };

//   const getUser = async() => {
//     const token = JSON.stringify(localStorage.getItem("token"))
//     const response = await fetch("http://localhost:5055/api/users/getuser",{
//       headers:{
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization:`Bearer ${token}`
//       }
//     })
//     const user = await response.json()
//     if(response.ok)
//     {
//       console.log("getuserden gelen bilgi=",user)
//       dispatch(setExactUsername(user.userName))
//       dispatch(login());
//       dispatch(
//           setLoginData({email,password})
//         );
//         localStorage.setItem("isLoggedIn",true)
//         const users = await fetch(
//           "http://localhost:5055/api/users/getusers",{
//             headers:{
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               Authorization:`Bearer ${token}`
//             }
//           }
          
//         ).then((res) => res.json());
//         const exactUser = await users.filter((user) => user.email == email)
//         // console.log(exactUser);
//         dispatch(setExactUsername(exactUser[0].userName));
//         localStorage.setItem("exactUsername",exactUser[0].userName);
//         setEmail('')
//         setPassword('') 
//     }
    
//   }

//   return (
//     <>
//       <Nav />
//       <div className={classes.login}>
//         <form onSubmit={handleSubmit} className={classes.login__form}>
//           <h2>Xoş gəlmisiniz!</h2>
//           <div >
//             <label htmlFor="Email">Email</label>
//             <input
//               type="email"
//               id="Email"
//               name="Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div >
//             <label htmlFor="Password">Şifrə</label>
//             <input
//               type="password"
//               id="Password"
//               name="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Daxil ol</button>
//         </form>
//         {error && (
//             <Alertim/>
//         )}
//       </div>
//     </>
//   );
// }

// export default Login;
