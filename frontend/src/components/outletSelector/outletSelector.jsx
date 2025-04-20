import React from 'react'
import './outletSelector.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const outletSelector = () => {

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(`/bennett-foods/${path}`);
    };

    return (
        <>
            <div className='outletSelector' id='outletSelector'>
                <div className="outletSelector-text">
                    <h1>🍽️ Select a Food Stall</h1>
                </div>
                <div className="outlets-list">
                    <div className="outlets-list-box" onClick={()=> handleClick('hotspot')}>
                        <img  src={assets.Hotspot} alt="" />
                        <h2>HotsPot</h2>
                    </div>
                    <div className="outlets-list-box" onClick={()=> handleClick('southern')}>
                        <img src={assets.Southern} alt="" />
                        <h2>Southern Stories</h2>
                    </div>
                    <div className="outlets-list-box" onClick={()=> handleClick('snapeats')}>
                        <img src={assets.snapeats} alt="" />
                        <h2>SnapEats</h2>
                    </div>
                    <div className="outlets-list-box" onClick={()=> handleClick('quench')}>
                        <img src={assets.quench} alt="" />
                        <h2>Quench</h2>
                    </div>
                </div>

            </div>
        </>

    )
}

export default outletSelector
