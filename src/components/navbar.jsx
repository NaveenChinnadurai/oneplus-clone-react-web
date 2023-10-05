import React from 'react'
import '../styles/compoStyles/navbar.css'
import {FiSearch as Search} from 'react-icons/fi'
import {BsCartDash as Cart} from 'react-icons/bs'
import {CgProfile as Profile} from 'react-icons/cg'
function Navbar() {
  const navbarList=["Phone","TV & Display","Audio & Watch","Tablet","Accessories","Offers","Stores","OneTopia","OnePlus Featuring","Community","Support"]
  return (
    <div className='navbar-div'>
        <div className="navbar-icon">
            <h2>ONEPLUS</h2>
        </div>
        <div className="navbar-list">
            <ul>
                {
                    navbarList.map((e,i)=>{
                        return(
                            <li key={i}>{e}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div className="navbar-icons">
            <Search className='banner-icon'/>
            <Cart className='banner-icon'/>
            <Profile className='banner-icon'/>
        </div>
    </div>
  )
}

export default Navbar