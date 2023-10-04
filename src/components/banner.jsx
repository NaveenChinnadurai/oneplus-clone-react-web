import React from 'react'
import '../styles/compoStyles/banner.css'
import chat from '../assets/chat.svg'
function Banner() {
    return (
        <div className='banner-div'>
            <div className="banner-head">
                <p>With those who matter</p>
                <h1>#OneCelebration</h1>
            </div>
            <div className="banner-end">
                <span className="banner-btn">Notify Me</span>
            </div>
            <div className="banner-chat-icon">
                <img src={chat} alt="chatbot" className='banner-chat' />
            </div>
        </div>
    )
}

export default Banner