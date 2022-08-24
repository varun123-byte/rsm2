import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image1 from "./logo.jpg";
import Image11 from "./11.png";
import Image12 from "./12.png";
import Image13 from "./13.png";
import Image14 from "./14.png";
import Image15 from "./15.gif";
import Image16 from "./16.png";
import Image17 from "./17.png";
import Image18 from "./18.jpeg";
import Image19 from "./19.png";
import Image20 from "./20.png";
import Image21 from "./21.jpg";
import Image22 from "./22.png";

const Product=()=>{
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
    <h1><b> Companies of Product Based</b></h1>
  </div>
</div><br></br>
<table>
    <tr>
        <td>
        <div class="cardss">
<div class="card2" ><a href="Adobe">
  <img class="card-img-top" src={Image11} alt="Card image cap"></img></a>
  <div class="card-body">
    <p class="card-text"><b><center>ADOBE</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" ><a href="Amaz">
  <img class="card-img-top" src={Image12} alt="Card image cap"></img></a>
  <div class="card-body">
    <p class="card-text"><b><center>AMAZON</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" ><a href="Goog">
  <img class="card-img-top" src={Image15} alt="Card image cap"></img></a>
  <div class="card-body">
    <p class="card-text"><b><center>GOOGLE</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image14} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>FACBEOOK</center></b></p>
  </div>
</div>
</div>
        </td>
        </tr>
        <tr>
            <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image13} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>AMDOCS</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image16} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>MICROSOFT</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image17} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>HP</center></b></p>
  </div>
</div>
</div>
        </td>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image18} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>INFORMATICA</center></b></p>
  </div>
</div>
</div>
        </td>
        </tr>
        <tr>
        <td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image19} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>INTEL</center></b></p>
  </div>
</div>
</div>
</td>
<td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image20} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>McaFee</center></b></p>
  </div>
</div>
</div>
        </td><td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image21} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>SALESFORCE</center></b></p>
  </div>
</div>
</div>
        </td><td>
        <div class="cardss">
<div class="card2" >
  <img class="card-img-top" src={Image22} alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text"><b><center>VMWARE</center></b></p>
  </div>
</div>
</div>
    </td>
    </tr>
</table>
<br></br>
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
export default Product;