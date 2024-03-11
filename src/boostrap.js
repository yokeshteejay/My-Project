import React from 'react'
import "./bootstrap.css"
import img from "./img/kitkat.jpeg"
import {Link} from "react-router-dom"
function Boostrap({normal} ) {
  return (
    <>

<div class="offcanvas offcanvas-start" id="demo">
  

  <div class="offcanvas-body">

  <div className='kitkat'>
  <img src={img}></img>
</div>

  
<button className='dots1' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><i class="fa-solid fa-xmark"></i> </button>

  <div className='container'>
    <p> <i class="fa-brands fa-microsoft"></i> dashboard</p>
  </div>

  <div class="dropdown">
    <button type="button" className='dashboard' data-bs-toggle="dropdown">
      <p> <i class="fa-solid fa-user"></i> Student Info <i class="fa-solid fa-angle-down"></i></p>
    </button>
    <ul class="dropdown-menu">
    <li><Link to="/Addstudent">Add Student</Link></li>
      <li><Link to="/Viewstudent"> View Student</Link></li>
    </ul>

    <div className='sidebar'>
      <p><a class="dropdown-item" href="#"><i class="fa-solid fa-chart-column"></i> Attendance <i class="fa-solid fa-angle-down"></i></a></p>
      <p><a class="dropdown-item" href="#"><i class="fa-solid fa-message"></i> Receipt <i class="fa-solid fa-angle-down"></i></a></p>
      <p><a class="dropdown-item" href="#"><i class="fa-solid fa-lock"></i> GST Billing <i class="fa-solid fa-angle-down"></i></a></p>
      <p><a class="dropdown-item" href="#"><i class="fa-solid fa-list"></i> Master <i class="fa-solid fa-angle-down"></i></a></p >
    </div>
  </div>
  </div>
</div>

<div className='kitkat'>
  <img src={img}></img>
</div>

<div class="container-fluid mt-3">
  
  <button className='dots' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
  <i class="fa-solid fa-bars"></i>

  <div className='logo'>
  <i class="fa-solid fa-user"></i><br></br>
  <i class="fa-solid fa-chart-column"></i><br></br>
  <i class="fa-solid fa-message"></i><br></br>
  <i class="fa-solid fa-lock"></i><br></br>
  <i class="fa-solid fa-list"></i><br></br>

  </div>
  </button>
</div>

<div className="searchbar">
  <input type='text' placeholder='enter the value'></input>
</div>

<div className='grid_div'>
   <div className='grid'>
       <div className='div_1'><h2>Student {normal}</h2></div>
       <div className='div_2'><h2>Employees</h2></div>
       <div className='div_3'><h2>Employees</h2></div>
       <div className='div_4'><h2>Employees</h2></div>
   </div>
   </div>
</>
  )
}

export default Boostrap