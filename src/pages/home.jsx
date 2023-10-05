import React from 'react'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import Mobile from '../components/mobile'
import ProductCard from '../components/productCard'
import '../styles/pageStyles/home.css'
import img1 from '../assets/neckband.png'
import img2 from '../assets/earpods.png'
function Home() {
    const productCard=[
        {
            id:1,
            title:'OnePlus Bullets Wireless Z2',
            para:'Save extra up to ₹200 by using the APP exclusive coupon',
            price:'At ₹1 849 *Incl. bank discount',
            img:img1
        },
        {
            id:2,
            title:'OnePlus Buds Pro 2',
            para:'Save extra ₹500 by using the RCC linked device benefit',
            price:'At ₹11 999',
            img:img2
        }
    ]
    return (
        <div className='home'>
            <Navbar />
            <Banner />
            <Mobile />
            <div className='home-product-div'>
                {
                    productCard.map((e)=>{
                        return(
                            <ProductCard card={e}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home