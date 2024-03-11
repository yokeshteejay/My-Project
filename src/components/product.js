import React from "react"
import "../components/product.css"
// import img_1 from "../img/item5.avif"

function Product({ productItems,handleAddproduct}) {
  // console.log(productItems[0]);
  // var {image , title, Price} = productItems;

  // console.log(title[0]);
  return (

//     <div>
// {

//   productItems && productItems.map((v)=>(<div>

// <div>{v.title}</div>

// <div>
//   <img src={v.image}/>
// {/* {v.Price} */}
// </div>



//   </div>))
// }
// {/* <Data_img/> */}
// {/* <img  src={img_1}/> */}

//     </div>

   
    <div className='product'>
        {productItems.map((productItems)=>(
            <div className='card'>
            <div>
                <img className='product_image' src={productItems.image} 
                alt={productItems.title}>
                </img>
            </div>

            <div>
                <h3 className='product_name'>{productItems.title}</h3>

            </div>

            <div className='product_price'>${productItems.Price}</div>

            <div><button className='product_button' onClick={()=>handleAddproduct(productItems)}>Add to cart</button></div>
            </div>
        ))}
      
    </div>
    
  )
}

export default Product