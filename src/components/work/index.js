import React from 'react'
import "./style.css"
import WorkCard from '../workcard'
import CardData from './carddata'

const WorkData = () => {
  return (
    <div className="work-container">
      <h1 className='project-heading'>Articles</h1>
      <div className="project-container">
        {CardData.map((val, ind) => {
          return (
            <WorkCard  
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WorkData
