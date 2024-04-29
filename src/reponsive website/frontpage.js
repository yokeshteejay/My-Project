import React from "react";
import "./frontpage.css"
import image from "../img/roofing.jpg"
import image1 from "../img/furniture 6.jpg"
import image2 from "../img/furniture 5.jpg"
import image3 from "../img/roof1.jpg"
import image4 from "../img/roof2.jpg"
import image5 from "../img/roof3.jpg"
import image6 from "../img/roof4.jpg"
import image7 from "../img/roof5.jpg"
import image8 from "../img/roof6.jpg"
import image9 from "../img/muthoot.jpeg"
import image10 from "../img/Nissan.jpg"
import image11 from "../img/mahindra.jpeg"
import image12 from "../img/tata.jpg"
import image13 from "../img/bsnl.jpeg"
import image14 from "../img/logo2.jpeg"
import Nav_bar from "./nav";
import Footer from "./footer";

function Frontpage() {
  return (
   <>
<Nav_bar/>

{/* slide */}
<div id="carouselExampleFade" class="carousel slide carousel-fade" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image} class="d-block w-100" alt="..." height={650}></img>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..." height={650}></img>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100" alt="..." height={650}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


{/* grid images */}

<div className="products">
  
<div class="container-fluid text-center">
  <h1>OUR SERVICE</h1>
  <br></br><br></br><br></br>
  <div class="row">
    <div class="col-sm-4">
    <img src={image3} class="d-block w-100" alt="..." height={300}></img>
      <p>ZINCALUME STEEL</p>
    </div>
    <div class="col-sm-4">
    <img src={image4} class="d-block w-100" alt="..." height={300}></img>
      <p>ROOF AND WALL CLADDING</p>
    </div>
    <div class="col-sm-4">
    <img src={image5} class="d-block w-100" alt="..." height={300}></img>
      <p>BUTLER BULDINGS SYSTEM</p>
      <p></p>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-sm-4">
    <img src={image6} class="d-block w-100" alt="..." height={300}></img>
      <p>ROOF VENTILATOR</p>
    </div>
    <div class="col-sm-4">
    <img src={image7} class="d-block w-100" alt="..." height={300}></img>
      <p>CURVED ROOFING SHEETS</p>
    </div>
    <div class="col-sm-4">
    <img src={image8} class="d-block w-100" alt="..." height={300}></img>
      <p>COLOR COATED SHEET COIL</p>
    </div>
  </div>
</div>
</div>


{/* 
<div className="services">
<button type="button">View All Services</button>
</div> */}



<div class="container-fluid bg-2 text-center">
  <h1>Our Mission</h1><br></br>
  <h5>We are committed to provide a compressive range of high quality and cost-effective products, through our international recognised principals. Team motto for the industry in “ We Do Things Right First Time Every Time” </h5>
</div>

<div class="bg-1" className="vison">
  <div class="container">
    <h3 class="text-center">Our Vision</h3>
    <p class="text-center">SK Engineering Services has been setup with a vision to provide the latest Technology and cost-effective solution to the process industries trans India.
</p>


    {/* <ul class="list-group">
      <li class="list-group-item">September <span class="label label-danger">Sold Out!</span></li>
      <li class="list-group-item">October <span class="label label-danger">Sold Out!</span></li> 
      <li class="list-group-item">November <span class="badge">3</span></li> 
    </ul> */}

    <div className="box">
    <div class="row text-center">
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src={image4} alt="Paris" width="400" height={500}></img><br></br>
          <h1>Roof and Wall Cladding </h1>
          <p>
 range of colour coated Roofing and Wall Cladding profiles from Tata BluesScope Steel are suitable for a variety of applications and design considerations.The …</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src={image7} alt="New York" width="400" height="300"></img><br></br>
          <h1>Curved Roofing Sheets </h1>
<p> Curved Roofing Sheets are ideal for residential, commercial as well as industrial usage. Our entire range is fully tested on all load …</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src={image6} alt="San Francisco" width="400" height="300"></img>
          <h1>Roof Ventilation</h1>
          <p>roof ventilation system includes ridge vent, off ridge vent, box vent, hardwired powered attic vent, solar-powered attic vent, roof turbine vent, and cupola vent system. …</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>


<div className="slide2">
{/* <h2>What our customers say</h2> */}
  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    {/* <!-- Wrapper for slides --> */}
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <h4>"This company is the best. I am so happy with the result!"<br></br><span>Michael Roe, Vice President, Comment Box</span></h4>
      </div>
      <div class="item">
        <h4>"One word... WOW!!"<br></br><span>John Doe, Salesman, Rep Inc</span></h4>
      </div>
      <div class="item">
        <h4>"Could I... BE any more happy with this company?"<br></br><span>Chandler Bing, Actor, FriendsAlot</span></h4>
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>


{/* services */}
<div className="products">
  
<div class="container-fluid text-center">
  <h1>
OUR AWESOME CLIENTS</h1>
  <br></br><br></br><br></br>
  <div class="row">
    <div class="col-sm-4">
    <img src={image9} class="d-block w-100" alt="..." height={190}></img>
      {/* <p>India's No. 1 Most Trusted Financial Services Brand 2023 for 7th Year in a row by TRA's Brand Trust Report. With a resolute focus on providing customers with the best services, Muthoot Finance has managed to earn the trust of millions.</p> */}
    </div>
    <div class="col-sm-4">
    <img src={image10} class="d-block w-100" alt="..." height={180}></img>
      {/* <p>The Nissan logo consists of a horizontal rectangle with the company name and a circle around it12. The circle symbolizes the sun, which is a reference to the origin of the brand in Japan2. The logo is a modernized version of the Datsun logo, which was used by Nissan in the 1930s1</p> */}
    </div>
    <div class="col-sm-4">
    <img src={image11} class="d-block w-100" alt="..." height={180}></img>
      {/* <p>New Mahindra Bolero Neo Launch in India (2021) | New Mahindra SUV
QMS Certification of Mahindra Auto Plants | Tuv Nord Cert Mahindra
FAQs - Mahindra Passenger & Commercial Vehicles | Mahindra Auto</p> */}
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-sm-4">
    <img src={image12} class="d-block w-100" alt="..." height={170}></img>
      {/* <p>Tata Motors Limited is an Indian Multinational automotive company, headquartered in Mumbai and part of the Tata Group. The company produces cars, trucks, vans, and busses. Subsidiaries include British…</p> */}
    </div>
    <div class="col-sm-4">
    <img src={image13} class="d-block w-100" alt="..." height={190}></img>
      {/* <p>Bharat Sanchar Nigam Limited is a central public sector undertaking headquartered in New Delhi, India. It is under the ownership of the Department of Telecommunications, Ministry of Communications, Go…</p> */}
    </div>
    <div class="col-sm-4">
    <img src={image14} class="d-block w-100" alt="..." height={180}></img>
      {/* <p>A roof is the top covering of a building, including all materials and constructions necessary to support it on the walls of the building or on uprights, providing protection against rain, snow, sunlight, ext…</p> */}
    </div>
  </div>
</div>
</div>

<div className="testimonial"> 
<div class="container-fluid">
<center> <h1>TESTIMONIALS</h1></center>  <br></br><br></br>
    <div class="row">
      <div class="col-6  p-3" height={300}>
     <p> Many thanks for your roofing system which saved my customers at<br></br>
parking.we appreciate your quality concern methods!</p>
      </div>
      <div class="col-6 bg-dark text-white p-3">

      <p>Many thanks for your roofing system which saved my customers at<br></br>
parking.we appreciate your quality concern methods!</p>
    
      </div>
    </div>
  </div>
</div><br></br><br></br>

 <div className="clients">
<div class="container">
  

 <center>
 <h1>Clients</h1><br></br>
  <h1>Project</h1><br></br>
  <h1>Years Experience</h1></center>
<br></br><br></br>
  <div class="card-deck">
   
    <div class="card bg-warning">
      <div class="card-body text-center">
      <h1>1100+</h1>
      </div>
    </div>

    <div class="card bg-success">
      <div class="card-body text-center">
       <h1>2000+</h1>
      </div>
    </div>
    <div class="card bg-danger">
      <div class="card-body text-center">
       <h1>10+</h1>
      </div>
    </div>  
  </div>
</div>
</div>


{/* footer */}




<Footer/>




   </>
  )
}

export default Frontpage