import React from 'react';
import "./form.css";
import img from "../img/head1 (1).png";
import img1 from "../img/head2.png";

function Looklike() {
  return (
    // <div className="container-fluid text-center">
    //   <div className="row">
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">

    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '50px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '50px', width: '120px' }} />
    //         </div>
    //       </div>
    //       <p style={{marginTop:"-14px"}}>Stage 1</p>

    //     </div>
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //       <p>Stage 1</p>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <p>Stage 1</p>
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <p>Stage 1</p>
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Repeat the above row structure three more times */}
    //   {/* 3 more rows with 4 columns each */}
    //   <div className="row">
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <p>Stage 1</p>
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <p>Stage 1</p>
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <p>Stage 1</p>
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <div className="thumbnail d-flex">
    //         <p>Stage 1</p>
    //         <div className="caption d-flex justify-content-center">
    //           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //           <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '80px', width: '120px' }} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

      
    // </div>

    <>
    
    <div class="container-fluid d-flex justify-content-center" style={{marginTop:"-20px"}}>
  <div class="row w-100 mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      
             <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />

           </div>
           <div className="caption d-flex justify-content-center w-100">
      
           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
           </div>
      </div>
    </div>
  </div>
</div>

  
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-35px"}}>
  <div class="row w-100  mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      <p>stage1</p>
             
           </div>
           <div className="caption d-flex justify-content-center w-100">
      <p>Stage 1</p>

            </div>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-80px"}}>
  <div class="row w-100 mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      
             <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />

           </div>
           <div className="caption d-flex justify-content-center w-100">
      
           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
           </div>
      </div>
    </div>
  </div>
</div>

  
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-35px"}}>
  <div class="row w-100  mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      <p>stage1</p>
             
           </div>
           <div className="caption d-flex justify-content-center w-100">
      <p>Stage 1</p>

            </div>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-80px"}}>
  <div class="row w-100 mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      
             <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />

           </div>
           <div className="caption d-flex justify-content-center w-100">
      
           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
           </div>
      </div>
    </div>
  </div>
</div>

  
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-35px"}}>
  <div class="row w-100  mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      <p>stage1</p>
             
           </div>
           <div className="caption d-flex justify-content-center w-100">
      <p>Stage 1</p>

            </div>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-80px"}}>
  <div class="row w-100 mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      
             <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />

           </div>
           <div className="caption d-flex justify-content-center w-100">
      
           <img src={img} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
             <img src={img1} alt="" className="img-fluid rounded-circle" style={{ height: '70px', width: '120px' }} />
           </div>
      </div>
    </div>
  </div>
</div>

  
<div class="container-fluid d-flex justify-content-center" style={{marginTop:"-35px"}}>
  <div class="row w-100  mt-5">
    <div class="col-md-12">
      <div class="btn-group d-flex justify-content-evenly d-grid gap-5" style={{height:"70px"}}>
      <div className="caption d-flex justify-content-center w-100 text-center">
      <p>stage1</p>
             
           </div>
           <div className="caption d-flex justify-content-center w-100">
      <p>Stage 1</p>

            </div>
      </div>
    </div>
  </div>
</div>
    
    
    
    </>
  );
}

export default Looklike;
