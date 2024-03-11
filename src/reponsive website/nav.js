import React from 'react'
import img from "../img/title.jpg"
import "./nav.css"

function Nav_bar() {
  return (
    <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand"><img src={img} height={63} width={200} id='logo'></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SPECIFICATION</a>
      </li>  
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
      </li>    
    </ul>
  </div>  
</nav>
   </div>
  )
}

export default Nav_bar