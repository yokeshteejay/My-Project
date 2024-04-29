import React from 'react'
import Nav_bar from './nav'
import Footer from './footer'
import "./contact.css"

function Contact() {
  return (
    <>
  <Nav_bar/>  

<div class="container-fluid bg-grey" id="wholediv">
<h2 class="text-center">CONTACT</h2>
  <div class="row"  >
    <div class="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
      <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
      <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
    </div>
    <div class="col-sm-7">
      <div class="row" id="box">
        <div class="col-sm-6 form-group " >
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required></input>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required></input>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br></br>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="container-fluid text-center" id="wholemap" >
<div class="container">
  <h1>LOCATION</h1>
</div><br></br><br></br>
  <div id="my-map-canvas" class="container" >
    <iframe class="container w-100 " id="map1" src="https://www.google.com/maps/embed/v1/place?q=Sk+Engineering,+Nallampalayam,+Coimbatore,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
    </iframe>
    </div><a class="googlemaps-made" href="https://www.bootstrapskins.com/themes" id="inject-map-data"></a>
    </div>
<div>
    <Footer/>
    </div>
    </>
    
  )
}

export default Contact
