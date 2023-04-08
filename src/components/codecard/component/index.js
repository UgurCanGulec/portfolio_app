import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

const CodeCardContent = ({title, keyword1, keyword2, keyword3, keyword4, source}) => {
  return (
<div className="card">
    <h3>{title}</h3>
    <span className='bar'></span>
    <p className='btc'>Keywords</p>
    <p>{keyword1}</p>
    <p>{keyword2}</p>
    <p>{keyword3}</p>
    <p>{keyword4}</p>
    <Link to={source} className='btn purchase'>
        REVIEW NOW
    </Link>
</div>
  )
}

export default CodeCardContent
