
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src="./images/Frame 2.png" alt="" />
        </div>
        <div className="navbar-links">
            <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>ABOUT US</li>
            </ul>
        </div>
        <div className="navbar-profile">
            <button><img src="./images/basket 1.png" alt="" /></button>
            <button><img src="./images/profile 1.png" alt="" /></button>
        </div>
    </div>
  )
}
