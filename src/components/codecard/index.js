import React from 'react'
import "./style.css"
import CodeCardContent from './component'
import CodeCardData from './codeCardData'

const CodeCard = ({ heading }) => {
  return (
    <div className="card-data">
        <div className="heading">
            <h1>{heading}</h1>
        </div>
        <div className="card-container">
          {CodeCardData.map((val, ind) => {
            return (
              <CodeCardContent
                key={ind}
                title={val.title}
                keyword1={val.keyword1}
                keyword2={val.keyword2}
                keyword3={val.keyword3}
                keyword4={val.keyword4}
                source={val.source}
            />
            )
          })}
        </div>
    </div>
  )
}

export default CodeCard
