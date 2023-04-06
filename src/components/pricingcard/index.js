import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Days -</p>
            <p>- 3 Days -</p>
            <Link to="/contact" className='btn purchase'>
                PURCHASE NOW
            </Link>
        </div>
        <div className="card">
            <h3>- Business -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Days -</p>
            <p>- 3 Days -</p>
            <Link to="/contact" className='btn purchase'>
                PURCHASE NOW
            </Link>
        </div>
        <div className="card">
            <h3>- Business -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Days -</p>
            <p>- 3 Days -</p>
            <Link to="/contact" className='btn purchase'>
                PURCHASE NOW
            </Link>
        </div>
    </div>
  )
}

export default PricingCard
