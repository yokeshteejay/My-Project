import React from 'react'
import "./product.css"
import Nav_bar from './nav'
import Footer from './footer'
import p1 from "../img/p1.png"
import p2 from "../img/p2 (1).png"
import p3 from "../img/p3.png"
import p4 from "../img/p4.png"
import p5 from "../img/p5.png"
import p6 from "../img/p6.png"
import p7 from "../img/p7.png"
import p8 from "../img/p8.png"

function Product() {
  return (
   <>
   <Nav_bar/>
   <div id="tour" class="bg-1">
  <div class="container">
    <h1 class="text-center"><em>Product</em></h1><br></br>
    <h3 class="text-center">Roofing products are materials that are used to construct or repair roofs12.Some examples of roofing products are12:
<br></br>
Asphalt shingles, which are economical and easy to install
Clay and concrete tiles, which add texture and elegance to a roof
Metal roofing, which is resistant to extreme weather conditions
Slate, which is durable and fire-resistant
Wood shingles and shake, which are natural and attractive
Synthetic roofing products, which are designed to mimic the appearance of other materials
Leak barrier, which prevents water from penetrating the roof</h3><br></br><br></br>
    
    <div class="row text-center" id="products">
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src={p1} alt="Paris" width="400" height="300"></img>
        </div>

        <div class="thumbnail">
          <img src={p4} alt="Paris" width="400" height="300"></img>
         
        </div>

        <div class="thumbnail">
          <img src={p5} alt="Paris" width="400" height="300"></img>
         
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src={p6} alt="New York" width="400" height="300"></img>
      
        </div>
        <div class="thumbnail">
          <img src={p2} alt="New York" width="400" height="300"></img>
         
        </div>

        <div class="thumbnail">
          <img src={p7} alt="New York" width="400" height="300"></img>
       
        </div>
      </div>
      <div class="col-sm-4">
        <div class="thumbnail">
          <img src={p3} alt="San Francisco" width="400" height="300"></img>
        
        </div>
        <div class="thumbnail">
          <img src={p8} alt="San Francisco" width="400" height="300"></img>
          
        </div>

        <div class="thumbnail">
          <img src={p1} alt="San Francisco" width="400" height="300"></img>
         
        </div>
      </div>

      
    </div>

  </div>
  </div>
  

  
   <Footer/>
   </>
  )
}

export default Product