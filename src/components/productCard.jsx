import React from 'react'
import '../styles/compoStyles/productCard.css'

function ProductCard(props) {
  return (
    <div className='productcard-div'>
      <div className="product-div-1">
        <div className="productcard-head">
          <h1>{props.card.title}</h1>
          <h1>{props.card.title1}</h1>
        </div>
        <div className="productcard-end">
          <p>{props.card.para}</p>
          <h3>{props.card.price}</h3>
          <div className="product-btn-div">
            <span className="btn solid product-btn">Buy Now</span>
            <span className="btn outline product-btn">Learn More</span>
          </div>
        </div>
      </div>
      <div className="product-div-2">
        <img src={props.card.img} alt="product-img" className='product-img' />
      </div>
    </div>
  )
}

export default ProductCard