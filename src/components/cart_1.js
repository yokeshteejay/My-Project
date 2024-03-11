import React from "react"

function Cart_1({cartItem,handleAddproduct,handleRemoveproduct,handleCartClearance}) {

  const totalprice=cartItem.reduce((price,item)=> price + item.quantity * item.Price, 0)
  return (
    <div className='cart_items'>
      <div className='cart_items_header'>
        Cart Items
        <div className='clear-cart'>
          {cartItem.length >= 1 &&(
            <button className='clear' onClick={handleCartClearance}>Clear Cart</button>
          )}
        </div>


    {cartItem.length === 0 &&
    <div className='empty'>No items are added.</div>}

    <div>
        {cartItem.map((item)=>(
            <div key={item.id} className='cart-item-list'>
                <img className='cart-item-image'
                 src={item.image} 
                 alt={item.name}/>
                 <div className='cart-item-name'>{item.title}</div>
                 <div className='cart-item-function'>
                  <button className='add' onClick={()=> handleAddproduct(item)}>+</button>
                  <button className='remove' onClick={()=> handleRemoveproduct(item)}>-</button>
                </div>
              <div className='price'>
                {item.quantity} *${item.Price}
              </div>
                </div>
            
        ))}

    </div>
    <div className='total-price-name'>
    Total price
    <div className='total-price'>${totalprice}</div>
    </div>
    </div>
    </div>
  )
}

export default Cart_1