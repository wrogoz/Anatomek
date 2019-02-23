import React from 'react'
import './descriptionBasicComponent.css'
const DescriptionBasicComponent = (props) => {
    return (
        <p className="description">
            {props.text}
        </p>
    )
}

export default DescriptionBasicComponent