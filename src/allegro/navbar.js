import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div>
        <nav className='box1'>
        <p className='logo'>allegro</p>
        <ul>
        <li className='li_list'>Who we are <i className="fa-solid fa-angle-down"></i>
        <div className='drop_down'>
        <div className='list'></div>
          <ol>
          <li>At a glance</li>
          <li>in the community</li>
          <li>Meet the team</li>
        </ol>
        </div></li>
        <li className='li_list'>What we do <i className="fa-solid fa-angle-down"></i>
        <div className='drop_down_1'>
        <div className='list'></div>
          <ol>
            <li>Our business model</li>
            <li>innovation</li>
          </ol>
        </div>
        </li>
        <li className='li_list'>Press office <i className="fa-solid fa-angle-down"></i>
        <div className='drop_down_2'>
        <div className='list'></div>
         <ol>
            <li>News</li>
            <li>Archive</li>
            <li>Email alerts</li>
          </ol>
        </div>
        </li>
        <li className='li_list'><Link to="/investors" className='color'>Investors</Link></li>
        <li className='li_list'><Link to="/jobs" className='color'>Jobs</Link></li>
        <li className='li_list'><Link to="/contact" className='color'>Contact</Link></li>
        <li className='li_list'><i className="fa-solid fa-magnifying-glass"></i></li>
        <li className='li_list'>EN<i className="fa-solid fa-angle-down"></i>
        <li  className='icon'><i class="fa fa-bars"></i></li>

        <div className='drop_down_3'>
        <div className='list'></div>
        <ol>
            <li>English</li>
            <li>Polish</li>
          </ol>
        </div>
        </li>
        </ul>

</nav>
    </div>
  )
}

export default Navbar