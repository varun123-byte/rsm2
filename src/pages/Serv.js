import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image1 from "./logo.jpg";
import Image2 from "./sbc.jpg";
import Image3 from "./3.jpg";

const Serv=()=>{
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
    <h1><b>Service Based Companies (SBC'S)</b></h1>
  </div>
</div><br></br><br></br>
<div class="theory">
    <img src={Image2}></img><br></br><br></br><br></br>
    <h1>What are Service Based Companies?</h1><br></br>
    <p>A service-based company is the one that provides customers, clients the ultimate solution to their requirements or a service to another company. The service offered by the company is intangible and can be provided in the form of skills, amenities, and expertise.For example, a great IT Software solution for your company is how a service-based company provides its value to the client.Everyone wants the best job. Be it a fresher or an experienced candidate. There is always a different definition of best. For some, the best is a 9-5 job while some prefer flexible hours and the profile that they want.</p><br></br>
    <h1>Why join Service Based Companies?</h1><br></br>
    <p>There’s always a perception about service-based companies; that there are fewer job opportunities, less pay, more working hours.Let us break all those myths and read about why you should start your career or make a switch to a service-based company.ount of importance will be given to your code quality and efficiency. This will cause your knowledge and learning graph to go up.
    <ul>
        <li>Creativity is at par.</li>
        <li>The future scope is ascending.</li>
        <li>Dynamic Learning Curve.</li>
        <li>Presence of a Market and community.</li>
        <li>Work with the best.</li></ul></p><br></br>
<h1>Service Based Company Motto</h1><br></br>
<p>Everyone wants to join a company that will help them grow and nurture their skills and potential. The work culture in the top product based companies is truly unparalleled. They host multiple workshops every year that are focused on the overall development of their employees.The above list underlines some of these world-renowned and product-based companies. Jobs here offer an environment that respects your contributions and paves the way for individual development.However, these jobs are highly competitive, with less than 5% of people applying to these jobs getting hired. This is even harder than applying to a service-based company. Thus, the only way to stand out is to have relevant certification courses on your resume.  </p><br></br>
<p><a href="Service">Click to know more &nbsp;&nbsp;</a><button type="button" class="btn btn-primary">Know more</button></p><br></br>
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
export default Serv ;