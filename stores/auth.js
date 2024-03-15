// import { createSlice } from "@reduxjs/toolkit";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import Nav from "../components/Nav";
// import { useDispatch, useSelector } from "react-redux";
// import Alertim from "../components/Alertim";
// import { RedirectFunction, redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const initialState = {
//   isLoggedIn: false,
//   role: "",
//   loginData: {
//     email: "",
//     password: "",
//   },
//   registerData: {
//     fullname: "",
//     username: "",
//     email: "",
//     password: "",
//   },
//   exactUsername: "",
//   email: "",
// };

// const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isLoggedIn = true;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.loginData.email = "";
//       state.loginData.password = "";
//       state.exactUsername = "";
//     },
//     setLoginData: (state, action) => {
//       state.loginData.email = action.payload.email;
//       state.loginData.password = action.payload.password;
//     },
//     setRegisterData: (state, action) => {
//       state.registerData = action.payload;
//     },
//     setExactUsername: (state, action) => {
//       state.exactUsername = action.payload;
//     },
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     getUser: async (state, action) => {
//       const dispatch = useDispatch()
//       const token = JSON.stringify(localStorage.getItem("token"));
//       const response = await fetch("http://localhost:5055/api/users/getuser", {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const user = await response.json();
//       if (response.ok) {
//         console.log("getuserden gelen bilgi=", user);
//         dispatch(setExactUsername(user.userName));
//         dispatch(login());
//         dispatch(setLoginData({ email, password }));
//         localStorage.setItem("isLoggedIn", true);
//         const users = await fetch("http://localhost:5055/api/users/getusers", {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }).then((res) => res.json());
//         const exactUser = await users.filter((user) => user.email == email);
//         // console.log(exactUser);
//         dispatch(setExactUsername(exactUser[0].userName));
//         localStorage.setItem("exactUsername", exactUser[0].userName);
//         setEmail("");
//         setPassword("");
//       }
//     },
//   },
// });

// export const {
//   login,
//   logout,
//   setLoginData,
//   setRegisterData,
//   setExactUsername,
//   setEmail,
//   setRole,
// } = auth.actions;
// export default auth.reducer;
