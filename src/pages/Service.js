import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image0 from "./logo.jpg";
import Image2 from "./a1.jpeg";
import Image3 from "./a3.jpg";
import Image4 from "./a15.jpg";
import Image5 from "./a4.png";
import Image6 from "./a5.png";
import Image7 from "./a6.png";
import Image8 from "./a7.png";
import Image9 from "./a8.png";
import Image10 from "./a9.jpeg";
import Image11 from "./a10.jpeg";
import Image12 from "./24.jpeg";
import Image13 from "./a2.jpeg";

const Service=()=>{
    return(
        <div>
             <div class="navv">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
        <img src={Image0}></img>
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
    <h1><b>Companies of Service Based</b></h1>
  </div>
</div><br></br>
<table>
    <tr>
        <td>
        <div class="cardss">
<div class="card2" ><a href="Infosys">
  <img class="card-img-top" src={Image13} alt="Card image cap"></img></a>
  <div class="card-body">
    <p class="card-text"><b><center>INFOSYS</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" ><a href="Tcs">
  <img class="card-img-top" src={Image2} alt="Card image cap"></img></a>
  <div class="card-body">
    <p class="card-text"><b><center>TCS</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" ><a href="Hcl">
  <img class="card-img-top" src={Image3} alt="Card image cap"></img></a>
  <div class="card-body">
    <p class="card-text"><b><center>HCL</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image4} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>MINDTREE</center></b></p>
  </div>
</div>
</div>
        </td>
        </tr>
        <tr>
            <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image5} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>WIPRO</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image6} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>REDINGTON</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image7} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>TECH MAHINDRA</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image8} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>MDELOITTE</center></b></p>
  </div>
</div>
</div>
        </td>
        </tr>
        <tr>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image9} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>MPHASIS</center></b></p>
  </div>
</div>
</div>
</td>
<td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image10} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>LARSEN & TURBO</center></b></p>
  </div>
</div>
</div>
        </td><td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image11} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>AIRTEL</center></b></p>
  </div>
</div>
</div>
        </td><td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image12} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>FLIPKART</center></b></p>
  </div>
</div>
</div>
    </td>
    </tr>
</table><br></br><footer class="text-center text-white" >
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
export default Service;