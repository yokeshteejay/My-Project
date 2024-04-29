import React from 'react'
import img1 from "./img/saran1.jpeg"
import img2 from "./img/saran2.jpeg"
import "./saran.css"
import Saran1 from './saran1'

function Saran() {
  return (
   <>
   <nav>
    <div id="logo">
    <img src={img1} height={130} width={150}></img>
    </div>
    <div id="heading">
        <h1>KONGUNADU ARTS AND SCIENCE COLLEGE</h1>
        <p>(AUTONOMOUS)</p>
    </div>
    <div id="heading1">
        <p>re-accredited by NAAC with A+ Grade - 4th cycle,College of Excellence - UGC</p>
    </div>
    <div id="heading2">
    <h3>Coimbatore-641029,Tamil Nadu,India</h3>
    </div>
    <div id="logo1">
    <img src={img2} height={130} width={150}></img>
    </div>
   </nav>

      
<table id="result">
<tr>
<h4> <td> RESULT-NOV 2023 </td> </h4>
</tr>
</table>
<br></br>
<br></br>
   <div id="table">
<br></br>
<br></br>
<div id="result1">
   <table>
<tr>
<h4><td> Registration Number: </td></h4>
<td> <button type="button" class="btn btn-warning">Submit</button></td>
</tr>
</table>
<br></br>
<br></br>
 
 

   </div>
   </div>

   
<div class="input-group mb-3" id="forms1">
  <input type="text" id="inputGroupFile01" placeholder='Register number '></input>
</div>

<Saran1/>

   </>
  )
}

export default Saran