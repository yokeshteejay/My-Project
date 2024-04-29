import React from 'react'
import img from "../img/title.jpg"
import {Link} from "react-router-dom"
import "./nav.css"

function Nav_bar() {
  return (
    <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <Link class="navbar-brand"><img src={img} height={63} width={200} id='logo' alt=''/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">HOME</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">ABOUT US</Link>
      </li>
     
      <li id="dropdown1">
      <div class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown" id="but">Divisions 
  </button>
  <ul class="dropdown-menu" id="drop">
    <li><Link to="/color">Colour range</Link></li><br></br>
    <li><Link to="/specific">Specification</Link></li><br></br>
    <li><Link to="/product">Product</Link></li>

  
  </ul>
</div>

      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">CONTACT US</Link>
      </li>   
      <li>
      <form class="d-flex" id="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
        </li> 
    </ul>
  </div>  
</nav>
   </div>
  )
}

export default Nav_bar