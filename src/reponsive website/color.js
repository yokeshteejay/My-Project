import React from 'react'
import color1 from "../img/sheet.png"
import color2 from "../img/sheet color.png"
import color3 from "../img/roofing1.jpg"
import Nav_bar from './nav'
import Footer from './footer'

function Color() {
  return (
   <>
   <Nav_bar/>
   {/* slide */}
   
<div class="container" id="color1">
  <div class="row">
    <div class="col-sm-4">
      <h1>OUR MANUFACTURING SHEETS</h1>

      <div class="fakeimg">
      <img src={color1} class="d-block w-100" alt="..." height={300}></img>
      </div>
      
    <p>A roof (pl.: roofs or rooves) is the top covering of a building, including all materials and constructions necessary to support it on the walls of the building or on uprights, providing protection against rain, snow, sunlight, extremes of temperature</p>
      <br></br>
      <h1>Colors available </h1>
      <img src={color2} class="d-block w-100" alt="..." height={300}></img>
      
      <hr class="d-sm-none"></hr>
    </div>
    <div class="col-sm-8">
      <h1>Design elements</h1>
      <div class="fakeimg">
      <img src={color3} class="d-block w-100" alt="..." height={300}></img>
      </div>

      <p>The elements in the design of a roof are:<br></br><br></br>

  1.the material<br></br>
2.the construction<br></br>
3.the durability<br></br><br></br>
The material of a roof may range from banana leaves, wheaten straw or seagrass to laminated glass, copper (see: copper roofing), aluminium sheeting and pre-cast concrete. In many parts of the world ceramic roof tiles have been the predominant roofing material for centuries, if not millennia. Other roofing materials include asphalt, coal tar pitch, EPDM rubber, Hypalon, polyurethane foam, PVC, slate, Teflon fabric, TPO, and wood shakes and shingles.</p>
      <br></br>
    </div>
  </div>
</div>
<Footer/>
   </>
  )
}

export default Color