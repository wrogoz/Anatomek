import React from 'react'
import { MDBBtn } from 'mdbreact'
import { Link } from 'react-router-dom'
const SystemsListElement=(props)=>{
    return <li>
        <Link to={`/${props.route}`}>
            <MDBBtn color="light-green" >{props.title} </MDBBtn>
        </Link>
        
    </li>
}

export default SystemsListElement