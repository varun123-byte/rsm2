import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image12 from "./logo.jpg";
import Image3 from "./a1.jpeg";
const Tcs=()=>{
    return(
        <div>
              <div class="navv">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
        <img src={Image12}></img>
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Proserv"><b>Dashboards</b></a></li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><b>Job-Seekers</b></a>
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

<div class="jumbotron">
  <div class="heading">
    <h1><b>TATA CONSULTANCY SERVICES</b>
    <br></br>(TCS)</h1>
  </div>
</div><br></br>
<div class="tcs">
    <img src={Image3}></img><br></br><br></br>
    <h1>TCS Off Campus Drive</h1><br></br>
    <p>TCS Off Campus 2022 Drive For 2023, 2022, 2021 Batch Freshers, Online Registrations (Open): TCS is going to recruit freshers for 2023, 2022, and 2021 Batch Across India. Interested and eligible candidates apply online for TCS NQT Off Campus Drive through the below provided TCS official portal. We know that TCS hires a large number of candidates across India. This page is going to be a one-stop destination for all kinds of TCS Off Campus Drives across India. Students who are checking for the TCS NQT Exam can go through the below sections.</p><br></br>
    <h1>Latest Update: TCS NQT 2022 Drive for 2018-2024 Batch Freshers</h1><br></br>
    <p><ul>
        <li>Company Name: TCS</li>
        <li>Qualification: Pre-final or final year students from any stream or degree</li>
        <li>Name Of The Test: TCS National Qualifier Test (TCS NQT)</li>
        <li>Registration Status: Started for 2018-2024 Batches</li>
        <li>Last Date To Apply: 24th September 2022</li>
        <li>Test Date: 9th October 2022 OnWards</li>
        <li>Job Location: PAN India</li>
        </ul></p><br></br>
        <table>
  <tr>
    <th>Sections</th>
    <th>Duration</th>
    <th>No. of Questions</th>
  </tr>
  <tr>
    <td>Verbal Ability</td>
    <td>10 mins</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Quantitative Aptitude</td>
    <td>40 mins</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Programming Concepts</td>
    <td>20 mins</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Coding</td>
    <td>20 mins</td>
    <td>1</td>
  </tr>
 
</table><br></br><br></br>
<h1>TCS Off Campus Drive For 2023, 2022, 2021 Batch Freshers</h1><br></br>
<p>Now they are building a hyper-connected organization using internal social platforms to ensure extensive collaboration and engagement among our employees. This acts as a critical driver of competitive advantage among the 82% digital natives in their employee base. And their ability is to provide holistic long-term careers based on continuous learning driven by our anytime, anywhere, any device digital learning ecosystem helps us attract and develop the best talent. Their ability is to create an ‘experience’ for our employees, which has helped us consistently have the highest retention rates in our industry globally. Therefore, learn more about careers and opportunities at TCS.</p><br></br>
<h3>To Apply for this Company Click here -> <button type="button" class="btn btn-primary"><a href="Apply"style={{color:"white"}}>Apply for TCS</a></button></h3>
</div><br></br><footer class="text-center text-white" >
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
export default Tcs;