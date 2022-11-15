import React from 'react'
import './TravelCard.css'

export const TravelCard=(props)=> {
  return (
    <>
        <div className="content">
          <h2>{props.name}</h2>
          <h3>{props.tagline}</h3>
          <p>
            {props.desc}
          </p>
          <div className="btn">
            <a href="#packages">
              <button className="chk-btn">View Packages</button>
            </a>
          </div>
        </div>
    </>
  )
}
