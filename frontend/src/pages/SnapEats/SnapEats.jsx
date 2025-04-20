import React from 'react'
import './SnapEats.css'
import {assets} from '../../assets/assets'

const SnapEats = ({id,name,price,image,description}) => {
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
         <img src={image} alt="" className="food-item-image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default SnapEats
