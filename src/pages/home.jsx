import React from 'react'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Mobile from '../components/mobile'
import ProductCard from '../components/productCard'
import '../styles/pageStyles/home.css'
import img1 from '../assets/neckband.png'
import img2 from '../assets/earpods.png'
import gadgetImg1 from '../assets/gadgetImages/img1.png'
import gadgetImg2 from '../assets/gadgetImages/img2.png'
import gadgetImg3 from '../assets/gadgetImages/img3.png'
import gadgetImg4 from '../assets/gadgetImages/img4.png'

import Gadgets from '../components/gadgets'
function Home() {
    const productCard = [
        {
            id: 1,
            title: 'OnePlus Bullets ',
            title1: 'Wireless Z2',
            para: 'Save extra up to ₹200 by using the APP exclusive coupon',
            price: 'At ₹1 849 *Incl. bank discount',
            img: img1
        },
        {
            id: 2,
            title: 'OnePlus',
            title1: 'Buds Pro 2',
            para: 'Save extra ₹500 by using the RCC linked device benefit',
            price: 'At ₹11 999',
            img: img2
        }
    ]
    const gadgetList=[
        {
            id:1,
            title:'OnePlus Nord CE 3 Lite 5G',
            price:'19,999',
            img:gadgetImg1,
        },
        {
            id:1,
            title:'OnePlus 11 5G',
            price:'56,999',
            img:gadgetImg2,
        },
        {
            id:1,
            title:'OnePlus TV Y Series 32 | 43 Y1S Edge',
            price:'12,999',
            img:gadgetImg3,
        },
        {
            id:1,
            title:'OnePlus Pad',
            price:'37,999',
            img:gadgetImg4,
        },
    ]
    return (
        <div className='home'>
            <Navbar />
            <Banner />
            <div className="home-div-1">
                <Mobile />
                <div className='home-product-div'>
                    {
                        productCard.map((e) => {
                            return (
                                <ProductCard card={e} />
                            )
                        })
                    }
                </div>
                <div className="home-weekspecial-div">
                    <h3>This Week’s Hot Picks</h3>
                    <ul className="gadget-nav">
                        <li>Highlights</li>
                        <li>Phones</li>
                        <li>TV & Display</li>
                        <li>Audio</li>
                        <li>Wearables</li>
                        <li>Accessories</li>
                    </ul>
                    <div className="gadget-card">
                         {gadgetList.map((e)=>{
                            return(
                                <Gadgets card={e}/>
                            )
                         })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home