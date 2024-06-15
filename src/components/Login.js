import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import '../assets/css/Signup.css'
import google from '../assets/images/google.svg'

const Login = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };


    return (
        <>
            <Navbar />
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
            <div class="signup-container login-container">
                <div class="container">
                    <div class="form">
                        <h1>Log in to start journey</h1>
                        <form action="">
                            <label for="">Email address</label>
                            <input type="email" placeholder="Please enter your e-mail" required />
                            <label for="">Password</label>
                            <div class="input-box">
                                <input type={isPasswordVisible ? "text" : "password"} id="password" placeholder="Please enter your password" required="required" />
                                <i class="ri-eye-fill" id="show" style={{ display: isPasswordVisible ? "block" : "none" }}
                                    onClick={togglePasswordVisibility}></i>
                                <i class="ri-eye-off-fill" id="hide" style={{ display: isPasswordVisible ? "none" : "block" }}
                                    onClick={togglePasswordVisibility}></i>
                            </div>
                            <button>Log in</button>
                            <p><a href="">Forgot password ?</a></p>
                            <p>or</p>
                            <button class="signup-google"><img src={google} alt="" /><span>Continue with Google</span></button>
                            <p>Don't have an account ? &nbsp;<NavLink to="/signup">Sign Up here</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
