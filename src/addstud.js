import React from "react";
import "./addstud.css"
import img from "./img/kitkat.jpeg"
import img1 from "./img/kitkaticon.png"
import img2 from "./img/kitkaticon1.png"
import { Link } from "react-router-dom";
 

function Addstud_1({form_1}) {
    const trigger = ()=>{ form_1((prevCount)=> prevCount+1);
    };
  return (
    <>
       <div class="container-fluid mt-3">
      <button className='pro_but' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
       <img src={img} width={200} height={80}></img><br></br>
      </button>
    </div>
    <div className='add_div'>
      <div className="user1"><img src={img1} width={100} height={75}></img>Add Student</div>
      <div className="user2"><img src={img2} width={100} height={79}></img>View Student</div>

<form>
  <label>First Name:</label>
  <input type="text" className="label1"></input><br></br><br/>

  <label>Last Name:</label>
  <input type="text"  className="label2"></input><br></br><br></br>

  <label>Father Name:</label>
  <input type="text" className="label3"></input><br></br><br></br>

  <label>Mother Name:</label>
  <input type="text" className="label4"></input><br></br><br></br>

  <label>Email:</label>
  <input type="email" className="label5"></input><br></br><br></br>

  <label>Address:</label>
  <input type="text" className="label6"></input><br></br><br></br>

  <label>Date of Birth:</label>
  <input type="date" className="label7"></input><br></br><br></br>

  <label>Contact:</label>
  <input type="text" className="label8"></input><br></br><br></br>

  <label>Father Number:</label>
  <input type="number" className="label9"></input><br></br><br></br>

  <label>Marital Status: </label>
  <input type="checkbox" className="label10"></input><label className="word1">yes</label>
  <input type="checkbox" className="label11"></input><label className="word2">no</label><br></br><br></br>

  <label>Gender:</label>
  <input type="checkbox" className="label12"></input><label className="word3">Male</label>
  <input type="checkbox" className="label13"></input><label className="word4">Female</label><br></br><br></br>

  <label>Qualification:</label>
  <input type="checkbox" className="label14"></input><label className="word5">HSC</label>
  <input type="checkbox" className="label15"></input><label className="word6">Diploma</label><br></br><br></br>

  <label>CGPA<br></br>(percentage):</label>
  <input type="text" className="label16"></input><br></br><br></br>

  <label>PassedOut Year:</label>
  <input type="text" className="label17"></input><br></br><br></br>

  <label>Total Amount:</label>
  <input type="number" className="label18"></input><br></br><br></br>

  <label>Paid Amount:</label>
  <input type="number" className="label19"></input><br></br><br></br>

  <label>Remaining Amount:</label>
  <input type="number" className="label20"></input><br></br><br></br>

  <label>Photo:</label>
  <input type="file" className="label21"></input><br></br><br></br>

 <Link to='/'><button onClick={trigger} className="submit">Add</button></Link> 


  <label></label>
</form>

</div>


    </>
  )
}

export default Addstud_1