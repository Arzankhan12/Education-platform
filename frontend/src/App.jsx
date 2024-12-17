// import React from 'react'
// import Login from './Login/Login'
// import {createBrowserRouter,RouterProvider} from "react-router-dom"
// import LoginBussiness from './Login/LoginBussiness'
// import SignUp from './SignUp/SignUp'

// import Dashboard from './Dashboard/Dashboard'
// import VerifyOtp from './Login/VerifyOTP'
// import Register from './Login/Register'
// import Upload from './Upload'

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element:<Login/>
//   },
//   {
//     path: "/login-bussiness",
//     element:<LoginBussiness/>
//   },
//   {
//     path: "/sign-up",
//     element:<SignUp/>
//   },
  
//   {
//     path: "/dashboard",
//     element:<Dashboard/>
//   },
//   {
//     path: '/verify-otp',
//     element:<VerifyOtp/>
//   },
//   {
//     path: "/register",
//     element:<Register/>
//   },
//   {
//     path: "/upload",
//     element:<Upload/>
//   }
  
// ])

// function App() {
//   return (
//    <RouterProvider router={routes}/>
//   )
// }

// export default App


import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import LoginBussiness from './Login/LoginBussiness';
import SignUp from './SignUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Dashboard/Profile';
import UploadVideo from './Dashboard/UploadVideo';
import UploadCourse from './Dashboard/UploadCourse';
import VerifyOtp from './Login/VerifyOtp';
import Register from './Login/Register';
import Dash from './Dashboard/Dash';
import ShowUploadedVideos from './ShowUploadedVideos';
import Course from './Course';
import Home from './Home/Home';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login-bussiness",
    element: <LoginBussiness />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/video",
    element:<ShowUploadedVideos/>
    
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "upload-video", element: <UploadVideo /> },
      { path: "upload-course", element: <UploadCourse /> },
      { path: "dash", element: <Dash /> },
      { path: "", element: <Navigate to="dash" replace /> }, 
    ]
  },
  {
    path: '/verify-otp',
    element: <VerifyOtp />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/Course",
    element:<Course/>
  },
  {
    path: "/home",
    element:<Home/>
  }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
