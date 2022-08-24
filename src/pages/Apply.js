import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image1 from "./logo.jpg";

const Apply=()=>{
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
          <a class="nav-link active" aria-current="page" href="#"><b>Dashboards</b></a></li>
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
    <h1><b>Application Form</b></h1>
  </div>
</div><br></br>
            <div class="a1">
<table border="0" cellpadding="5" cellspacing="0">
<tr> <td >
<label for="Email_Address"><b>First Name*</b></label><br />
<input name="Email_Address" type="text" maxlength="100" />
</td> </tr>  <tr> <td >
<label for="Email_Address"><b>Last Name *</b></label><br />
<input name="Email_Address" type="text" maxlength="100" />
</td> </tr>  <tr> <td >
<label for="Email_Address"><b>Email *</b></label><br />
<input name="Email_Address" type="text" maxlength="100" />
</td> </tr> <tr> <td colspan="2">
<label for="Portfolio"><b>Portfolio website</b></label><br />
<input name="Portfolio" type="text" maxlength="255" value="http://"  />
</td> </tr> <tr> <td colspan="2">
<label for="Position"><b>Position you are applying for *</b></label><br />
<input name="Position" type="text" maxlength="100" />
</td> </tr>
<tr> <td >
<label for="Email_Address"><b>Salary Requirements*</b></label><br />
<input name="Email_Address" type="text" maxlength="100" />
</td> </tr>  <tr> <td >
<label for="Email_Address"><b>Where you can locate?*</b></label><br />
<input name="Email_Address" type="text" maxlength="100" />
</td> </tr>  <tr> <td>
<label for="Phone"><b>Phone *</b></label><br />
<input name="Phone" type="text" maxlength="50" />
</td> </tr> <tr> <td colspan="2">
<label for="Relocate"><b>Are you willing to relocate?</b></label><br />
<input name="Relocate" type="radio" value="Yes" checked="checked" /> Yes      
<input name="Relocate" type="radio" value="No" /> No      
<input name="Relocate" type="radio" value="NotSure" /> Not sure
</td> </tr> <tr> <td colspan="2">
<label for="Organization"><b>Last company you worked for</b></label><br />
<input name="Organization" type="text" maxlength="100"  />
</td> </tr>
<tr><td>
<label for="Organization"><b>Upload Resume *</b></label><br />
    <input type="file"></input></td></tr> <tr> <td colspan="2">
<label for="Reference"><b>Reference / Comments / Questions</b></label><br />
<textarea name="Reference" rows="7" cols="80" ></textarea>
</td> </tr> <tr> <td colspan="2" ><div class="sub"><a href="Success">
<input name="skip_submit" type="submit" value="Send Application" /></a></div>
</td> </tr>
</table>
</div></div>
        
    )
}
export default Apply;
