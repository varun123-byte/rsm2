import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";

const Register=()=>{
    return(
        <div>
        <div class="register"><br></br>
        <h1>Create Your Account</h1><br></br>
            <input type="text" name="t1" placeholder="First Name"></input><br></br><br></br>
            <input type="text" name="t1" placeholder="Last Name"></input><br></br><br></br>
            <input type="text" name="t1" placeholder="Enter your Email"></input><br></br><br></br>
            <input type="text" name="t1" placeholder="Enter User Name"></input><br></br><br></br>
            <input type="text" name="t1" placeholder="Enter your New Password"></input><br></br><br></br>
            <input type="text" name="t1" placeholder="Confirm Password"></input><br></br><br></br>
            <p>I accept the Terms of Use & Privacy Policy</p><br></br>
            <button><a href="Proserv">Sign Up</a></button><br></br>   <br></br>        
            <p>Already have an Account?<a href="Login">Login here</a></p>
            <p>Copyright @ company.com</p>
    </div><br></br>
</div>
)
}
export default Register;