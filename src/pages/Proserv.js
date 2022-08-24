import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image1 from "./pbc.jpg";
import Image3 from "./sbc.jpg";
import Image2 from "./logo.jpg";

const Proserv=()=>{
    return(
        <div>
             <div class="navv">
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
        <img src={Image2}></img>
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="proserve"><b>Dashboards</b></a></li>
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
    <h1><b>Job Opportunities in World Wide</b></h1>
  </div>
</div><br></br>
<div class="types">
      <div class="row">
        <div class="col">
  <table>
    <tr>
      <td>
      <div class="card1" ><a href="Prod">
  <img class="card" src={Image1} alt=""></img></a>
  <div class="card-body"><br></br>
      <h5 class="card-title"><center><i><b>Product Based Companies</b></i></center></h5>
</div></div>
      </td>
      <td>
      <div class="card1"><a href="Serv">
  <img class="card-img-top" src={Image3} alt=""></img></a>
  <div class="card-body"><br></br>
    <h5 class="card-title"><center><i><b>Service Based Companies</b></i></center></h5>
  </div>
</div>
      </td>
    </tr>
  </table></div>
</div>
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
        export default Proserv;