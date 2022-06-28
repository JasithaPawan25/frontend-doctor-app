
import React from "react";
import {Link,useNavigate} from 'react-router-dom';

function Navbar(){
    let navigate =useNavigate();

    const handleLogout =()=>{
        navigate("/")
    }


    return <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:"#31CCA5"}}> <h3>Doctor App</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">



        <li class="nav-item">
          {/* <a style={{textDecoration:"none"}} class="nav-link active" aria-current="page"><Link to="/issue" >Home</Link> </a> */}
          <Link to="/home" style={{textDecoration:"none",color:"#07081D"}}> <h4>Home&nbsp;</h4></Link>
        
         </li>
        <li class="nav-item">
        <Link to="/history"  style={{textDecoration:"none",color:"#07081D"}} >  <h4>History&nbsp;</h4></Link>
        </li>
        {/* <li class="nav-item">
         <Link to="/queue"  style={{textDecoration:"none",color:"#07081D"}}>  <h4>QueueWindow&nbsp;</h4></Link>
        </li> */}
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button> */}
       
      </form>
        <input type="button"
         value="Logout" 
         onClick={handleLogout} 
         class="btn btn-outline-info" />
         
     
    </div>
  </div>
</nav>
    </div>
}
export default Navbar;