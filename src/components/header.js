import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

function Header({cartItem}) {
  return (
    <header className='header'>
    <div>
      <h1>
        <Link to="/" className='logo'>
        MY SHOPPING
      </Link>
      </h1>
    </div>
    <div className='header-links'>
     <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
     </ul>
     <ul>
        <li>
            <Link to="/Signup">Signup</Link>
        </li>
     </ul>
     <ul>
        <li>
            <Link to="/Cart" className='cart'>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='cart-length'>
              {cartItem.length === 0 ? "" : cartItem.length }
            </span>
            </Link>
        </li>
     </ul>
    </div>
    </header>
  )
}

export default Header