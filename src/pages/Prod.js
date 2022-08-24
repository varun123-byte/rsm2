import React from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import Image1 from "./logo.jpg";
import Image2 from "./pbc.jpg";
import Image3 from "./3.jpg";

const Prod=()=>{
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
    <h1><b>Product Based Comapnies (PBC'S)</b></h1>
  </div>
</div><br></br><br></br>
<div class="theory">
    <img src={Image2}></img><br></br><br></br><br></br>
    <h1>What are Product Based Companies?</h1><br></br>
    <p>Product-based companies are driven by a plan to introduce products that have good market value and satisfy a wide range of customers. Here the principal spotlight would be on “How can I improve the product?”. “Quality” is the king here! They are ceaselessly dealing with improving and adding new features to the product utilizing different technologies.These dress production companies are an example of product-based companies as they produce dresses in every size and design to satisfy a wide range of customers. They introduce a variety of products concerning different seasons or trends according to the market survey. Particular brands also advertise their products to get customer attention.</p><br></br>
    <h1>Why join Product Based Companies?</h1><br></br>
    <p>Here, the shot at dealing with new tech stacks is extremely high as the world is changing each day and you need to continue to update your item similarly. So, if you are tech-savvy this is the perfect fit for you! Each time you are expected to do better as there is consistently an extent of improving the product.
Here, you have scope to explore domains other than the coding world. You will get hands-on experience on different business methodologies and analyze customer mindset. You will get to understand the market status and strategize better. In the future, if you want to go for entrepreneurship yourself, nothing can stop you.
As quality is the king here, a huge amount of importance will be given to your code quality and efficiency. This will cause your knowledge and learning graph to go up.</p><br></br>
<h1>Product Based Companies Motto</h1><br></br>
<p>Everyone wants to join a company that will help them grow and nurture their skills and potential. The work culture in the top product based companies is truly unparalleled. They host multiple workshops every year that are focused on the overall development of their employees.The above list underlines some of these world-renowned and product-based companies. Jobs here offer an environment that respects your contributions and paves the way for individual development.However, these jobs are highly competitive, with less than 5% of people applying to these jobs getting hired. This is even harder than applying to a service-based company. Thus, the only way to stand out is to have relevant certification courses on your resume.  </p><br></br>
<p><a href="Product">Click to know more</a> &nbsp;&nbsp;<button type="button" class="btn btn-primary">Know more</button></p><br></br>
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
export default Prod;