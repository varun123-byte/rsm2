import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image1 from "./logo.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";

const Home=()=>{
    return(
        <div>
            <div class="navv">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
        <img src={Image1}></img>
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Login"><b>Login Here</b></a></li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Register"><b>Sign-Up</b></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
<div class="f1">
    <img src={Image2}></img><br></br><br></br>
   <div class="f2">
        <h1> <b>JOB-fAIR</b></h1><br></br>
        <div class="row">
            <div class="col">
                <p>A job fair can be a convenient one-stop place to meet with recruiters and land a job. Many well-known companies and employers participate in a job fair, making it a great place to look for an entry-level career opportunity. Understanding how these fairs work can help you make a good impression at a career fair. In this article, we discuss what a job fair is and how to make most of your visit to one.It is important to bring several copies of your resume and also a notebook and pen with you at the job fair. If you have your own business cards, you can bring them to hand out with your resume or to any other contacts you meet during the career fair. Also carry a plain folder with separate compartments to hold your extra resumes, keep your pen and paper and store any business cards you receive.Job fairs are beneficial for both employers and candidates looking for a job. Job fairs provide candidates with opportunities to interact with recruiters and share important information. These are some of the benefits that candidates can get from attending a job fair:
They can find internships or future full-time opportunities.
They can personally meet with employers.
They can talk to other professionals and improve their professional network
They can get immediate responses from many companies at the event.</p></div>
  <div class="col">
    <img src={Image1}></img>
            </div>
        </div>
   </div><br></br><br></br>
<div class="f3">
    <img src={Image3}></img>
</div>
</div><br></br>
<footer class="text-center text-white" >
 <div class="text-center text-dark p-3" id="dd">
  <div class="container pt-0">
   
    <section class="mb-0">
      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-facebook-f"></i ></a>

     
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-twitter"></i></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-google"></i></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-linkedin"></i></a>
     
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa fa-github"></i></a>
    </section>
   
  </div>
    <a class="text-dark" href="https://mdbootstrap.com/">@www.jobfair.com</a>
  </div>
  
</footer>
        </div>
    )
}
export default Home;