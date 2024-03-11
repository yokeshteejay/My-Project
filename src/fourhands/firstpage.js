import React from 'react'
import"./firstpage.css"
import img from "../img/page1.png"
import img1 from "../img/page2.png"
import img3 from "../img/page3.png"
import img4 from "../img/page4.png"
import img5 from "../img/page6.png"
import img6 from "../img/page7.png"

function Firstpage() {
  return (
   <>
    <nav>
      <ul className='navbar1'>
        <li>Products</li>
        <li>Art Studio</li>
        <h3>FOUR HANDS</h3>
      </ul>
      
      <ul className='navbar2'>
        <li className='nav1'>To the Trade</li>
        <li>Locations</li>
        <li>Log In</li>
        <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
      </ul>
      
      </nav>

      <div className='head1'>
        <p>Art Studio</p>
      </div>

      <div className='head2'>
    <div>
      <img src={img3} height={500}  width={750}className='grid1'></img>
    </div>

<div className='head3'>
<h1>Welcome to Four Hands Art Studio</h1><br></br>
<p>Elevate your home or commercial space with our curated selection of art. </p><br></br>
<button>Become a customer</button>
</div>
</div>

<div className='head4'>

    <h1>Handmade in Austin, Texas</h1>
    <p>
    Thousands of unique pieces from more than 175 artists are produced by hand in our expansive new studio and ready to ship within 1 – 3 weeks.
    </p>
    <button>See the Latest</button>
</div>

      
      <div className='grid'>
    <div>
      <img src={img} height={500}  width={750}className='grid1'></img>
    </div>

<div className='grid3'>
<h1>Experienced Team</h1><br></br>
<p>Our highly trained curators, printmakers and framers have several decades’ worth of combined experience. </p><br></br>
{/* <button>About Us</button> */}
</div>

<div className='grid4'>
  <h1>Best-In-Class Technology <br></br>Trends</h1><br></br>
  <p>From advanced scanners to 3-D printers that reproduce texture and dimension, we offer the latest print technology in our new 50,000+ square foot studio space.</p><br></br>
  {/* <button>Explore More</button> */}
</div>
    <div className='grid2'>
      <img src={img1} height={500} width={740}></img>
    </div>
  </div>   
  <div className='grid'>
    <div>
      <img src={img4} height={500}  width={750}className='grid1'></img>
    </div>

<div className='grid3'>
<h1>A Wide Selection of Styles</h1><br></br>
<p>As a to-the-trade furniture designer and wholesaler since 1996, we offer thousands of designs for every space — from commercial to residential — to keep your homes and projects looking fresh. </p><br></br>
{/* <button>About Us</button> */}
</div>

<div className='grid4'>
  <h1>2024 Design <br></br>Trends</h1><br></br>
  <p>Get inspired by the top design stories you'll see from Four Hands next year.</p><br></br>
  <button>Explore More</button>
</div>
    <div className='grid2'>
      <img src={img5} height={500} width={740}></img>
    </div>
  </div>


  <div className='head1'>
        <p>Art Studio</p>
      </div>

      <div className='head2'>
    <div>
      <img src={img} height={500}  width={750}className='grid1'></img>
    </div>

<div className='head3'>
<h1>Welcome to Four Hands Art Studio</h1><br></br>
<p>Elevate your home or commercial space with our curated selection of art. </p><br></br>
<button>Become a customer</button>
</div>
</div>


<footer className='foot'>
  <ul>
    <p>Help</p>
    <li>Contact Us</li>
    <li>Help Center</li>
  </ul>

  <ul>
    <p>Our Company</p>
    <li>About Us</li>
    <li>Locations</li>
    <li>Art Studio</li>
    <li>Careers</li>
    <li>Media Room</li>
  </ul>

  <ul>
    <p>To the Trade</p>
    <li>Become a Customer</li>
    <li>FAQs</li>
    <li>Showrooms & Markets</li>
    <li>My Account</li>
  </ul>
</footer>
   </>

   

  )
}

export default Firstpage