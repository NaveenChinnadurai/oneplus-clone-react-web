import React from 'react'
import '../styles/compoStyles/mobile.css'
import mobileImg from '../assets/img1.png'
function Mobile() {
    return (
        <div className='mobile-div'>
            <div className="mobile-div-1">
                <div className="mobile-subdiv-1">
                    <h2>Relive the Red Rush</h2>
                    <h1>OnePlus 11R 5G Solar Red</h1>
                </div>
                <div className="mobile-subdiv-2">
                    <p>Coming October 7 | 12:00 AM. Hit 'Notify Me' to get a chance to win 999 RedCoins.</p>
                    <span className='banner-btn mobile-btn'>Notify Me</span>
                </div>
            </div>
            <div className="mobile-img">
                <img src={mobileImg} alt="OnePlus 11R 5G Solar Red" />
            </div>
        </div>
    )
}

export default Mobile