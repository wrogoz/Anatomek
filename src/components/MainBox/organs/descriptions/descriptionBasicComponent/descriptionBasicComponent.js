import React from 'react'
import './descriptionBasicComponent.css'
const DescriptionBasicComponent = (props) => {
    return (
    <div className="description">
    
        <h2>{props.header}</h2>
         <p> {props.text}</p>
           
    </div>
       
    )
}

export default DescriptionBasicComponent