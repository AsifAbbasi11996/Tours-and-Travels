import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Signup.css'
import google from '../assets/images/google.svg'
import Navbar from './Navbar'

const SignUp = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
            <Navbar />
            <div class="signup-container">
                <div class="container">
                    <div class="form">
                        <h1>Sign up to start your Journey</h1>
                        <form action="">
                            <label for="">Email address</label>
                            <input type="email" placeholder="Please enter your e-mail" required />
                            <label for="">Password</label>
                            <div class="input-box">
                                <input type={isPasswordVisible ? "password" : "text"} id="password" placeholder="Please enter your password" required="required" />
                                <i class="ri-eye-fill" id="show" style={{ display: isPasswordVisible ? "none" : "block" }}
                                    onClick={togglePasswordVisibility}></i>
                                <i class="ri-eye-off-fill" id="hide" style={{ display: isPasswordVisible ? "block" : "none" }}
                                    onClick={togglePasswordVisibility}></i>
                            </div>
                            <button>Next</button>
                            <p>or</p>
                            <button class="signup-google"><img src={google} alt="" /><span>Sign Up with Google</span></button>
                            <p>Already have an account? &nbsp;<NavLink to="/login">Log in here</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp
