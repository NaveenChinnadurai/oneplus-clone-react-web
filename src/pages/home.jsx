import React from 'react'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Mobile from '../components/mobile'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Banner />
            <Mobile/>
        </div>
    )
}

export default Home