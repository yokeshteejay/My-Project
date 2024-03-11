import React from 'react'
import "./fourhand.css"
import img from "../img/furniture 1.png"
import img1 from "../img/furniture 2.png"
import img2 from "../img/furniture 3.png"
import img3 from "../img/furniture 5.jpg"
import img4 from "../img/furniture 6.jpg"
import img5 from "../img/furniture7.png"
import img6 from "../img/furniture8.png"
import img7 from "../img/furniture9.png"
import img8 from "../img/furniture10.png"
import img9 from "../img/furniture 11.png"
import img10 from "../img/furniture 12.png"
import img11 from"../img/persons.png"

function Fourhand() {
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

      <div className='slide_nav'>
    <div className='box2'>
      <input type='radio' id='radio1' name='radios'></input>
      <input type='radio' id='radio2' name='radios'></input>
      <input type='radio' id='radio3' name='radios'></input>

    <div className='slide_1'>
    <div className='slide_2'>
     <img src={img} width={1500} height={600} ></img>
    <div className='allegro_news'>
    <div className='text_div'><br/><br/><br/><br/>
  
      <p>Welcome to the New FourHands.com</p>
      
    </div>
    </div>
    </div>
    </div>

    <div className='slide_1'>
    <div className='slide_2'>
     <img src={img1} width={1500} height={600} ></img>
    <div className='allegro_news_1'>
    <div className='text_div'><br/><br/><br/><br/><br/><br/><br/><br/>
<p>Welcome to the New FourHands.com</p>
    </div>
    </div>
    </div>
    </div>

    <div className='slide_1'>
    <div className='slide_2'>
     <img src={img2} width={1500} height={600} ></img>
    <div className='allegro_news_2'>
    <div className='text_div'><br/><br/><br/>
      <p>Welcome to the New FourHands.com</p>
      </div>
    </div>
    </div>
    </div>
  <div className='manual'>
    <label for="radio1" className='manuals'></label>
    <label for="radio2" className='manuals'></label>
    <label for="radio3" className='manuals'></label>
  </div>
    </div>
{/* prev and next button */}
</div>


<div className='title1'>
  <ul>
    <li>Join Our Trade<br></br> Program</li><br></br>
  </ul>
  </div>
  <button className='learn'>Learn More</button>

  <div className='title2'>
  <ul>
    <li>Shop more than 6,000 pieces as a trade customer, <br></br>with new arrivals every two weeks.</li><br></br>
    <li><h4>Great Discounts</h4>
    Enjoy better pricing the more you spend throughout the year.</li><br></br>

    <li> <h4>No Order Minimums</h4>
    Purchase what you want when you want.</li><br></br>

    <li>
    <h4>Dedicated Sales Team</h4>
    Get the expert resources your business needs.
    </li>
  </ul>
  </div>

  <div className='grid'>
    <div>
      <img src={img3} height={500}  width={750}className='grid1'></img>
    </div>

<div className='grid3'>
<h1>Who We Are</h1><br></br>
<p>As a to-the-trade furniture designer and wholesaler since 1996, we offer thousands of designs for every space — from commercial to residential — to keep your homes and projects looking fresh. </p><br></br>
<button>About Us</button>
</div>

<div className='grid4'>
  <h1>2024 Design <br></br>Trends</h1><br></br>
  <p>Get inspired by the top design stories you'll see from Four Hands next year.</p><br></br>
  <button>Explore More</button>
</div>
    <div className='grid2'>
      <img src={img4} height={500} width={740}></img>
    </div>
  </div>

<div className='para'>
  <p>Explore Our Look Books</p>
</div>

<div className='parent1'>
  <div>
  <img src={img5} height={400} width={350}></img>
  </div>
  <div>
  <img src={img6} height={400} width={350}></img>
  </div>
  <div>
  <img src={img7} height={400} width={350}></img>
  </div>
  <div>
  <img src={img8} height={400} width={350}></img>
  </div>
  </div>

  <div className='parent2'>
     <p>Fall '23</p>
     <p>Living Room</p>
     <p>Dinning Room</p>
     <p>Bedroom</p>
  </div>

  <div className='para1'>
    <h1>Ready to Shop?</h1>
    <p>Explore and shop our collections at select showrooms<br></br> and retailers.</p>
  </div>
  
  <div className='parent3'>
    <img src={img9} width={550}></img><br></br>
    <h1>Visit Us in Austin</h1><br></br>
    <p>If you're an Austin-area resident, you can shop our flagship showroom or outlet.</p><br></br>
    <button>See Your Location</button>
  </div>

  <div className='parent4'>
    <img src={img10} width={550}></img><br></br>
    <h1>Shop Online or In Person</h1><br></br>
    <p>You'll find us online and at select retailers across the country.</p><br></br>
    <button>How to Buy</button>
  </div>

  <div className='para2'>
    <p>____________________________________________</p>
  </div>


<div className='parent5'>
  <div className='parent6'>
    <h1>Join Our Team</h1><br></br>
    <p>Consistently ranked among Austin's top workplaces, we're always looking for passionate, motivated people to join our team.</p><br></br>
    <button>Learn More</button>
  </div>

  <div className='parent7'>
    <img src={img11} height={600}></img>
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

export default Fourhand