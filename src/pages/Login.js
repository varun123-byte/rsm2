import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";

const Login=()=>{
    return(
        <div>
        <div class="login"><br></br>
            <h1>LOGIN / SIGNUP</h1><br></br>
            <form name="fname" >
                <label>Email ID:&nbsp;</label>
                <input type="email" name="email" id="email" placeholder="Enter your Email"></input><br></br><br></br>
                <label>Password: &nbsp;</label>
                <input type="password" name="password" id="password" placeholder="Enter your correct Password"></input><br></br><br></br>
                <button onclick="validate();"><a href="Proserv" class="log">Login</a></button><br></br><br></br>
                <a href="index3.html" class="for">Forgot Password?</a>
            </form>
        
            <div class="login2">
            <hr></hr>
            <div class="login3">
                <a href="https://www.gmail.com" class="fa fa-google">&nbsp;&nbsp;&nbsp;<div class="google">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue with Google</div></a>
                <a href="https://www.twitter.com" class="fa fa-twitter">&nbsp;&nbsp;&nbsp;<div class="twitter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue with Twitter</div></a>
                <a href="https://www.github.com" class="fa fa-github">&nbsp;&nbsp;&nbsp;<div class="git">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continue with Github</div></a><br></br><br></br><p>Dont have an account?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="index2.html" >Sign Up</a></p><br></br>
</div></div>
        </div>
        </div>
        )
        }
        export default Login;


      