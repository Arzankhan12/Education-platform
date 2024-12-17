import React, { useState } from 'react'
import illustration from "../assets/Images/7178891.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbas'
import Footer from '../Footer/Footer'
import axios from "axios"


function SignUp() {

  const users={
    fullname:"",
    email: "",
    password:"",

  }
  const [user, setUser] = useState(users)
  const navigate=useNavigate()
  const inputhandler = (e) => {
    const { name, value } = e.target
    setUser({...user,[name]:value})
  }
  const submitForm = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:7000/api/create', user)
      .then((res) => {
        if (res.data === "!email") {
          alert("email already exists")
        } else {
          alert("register Successfully")
           navigate("/")
        }
        
      })

      .catch((err) => {
      console.log(err)
    })
    
  }
    return (
       <>
        <Navbar/>    
       
    <div className="login-page">
    
    <div className="left-section">
      <img src={illustration} alt="Illustration" className="illustration" />
    </div>

    
    <div className="right-section">
      <div className="form-container">
        <h2>Sign up and start learning</h2>
                  <form >
          <input type="text" placeholder="Full Name" name='fullname' required onChange={inputhandler}/>
          <input type="email" placeholder="Email" name='email' required onChange={inputhandler} />
          <input type="password" placeholder="Password" name='password' required  onChange={inputhandler}/>
          <button onClick={submitForm} >Sign up</button>
        </form>
                 
       
        <div className="signup-links">
          <p>
          Already have an account? <Link to={'/'}><span className='span'>Login </span></Link>
                      </p>
                      <br />
         
        </div>
      </div>
    </div>
            </div>
            <Footer/>
            </>
  )
}

export default SignUp
