import React from 'react'
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom'
import './SystemBasicComponent.css'
const SystemBasicComponent=(props)=>{
    console.log(props)
    return(
        <MDBRow className="mainBox no-gutters">
            <MDBCol md="6" className="firstCol">
                <img className="systemImg"
                src={props.imgSrc} 
                alt={props.alt}/>
            </MDBCol>
            <MDBCol md="6" className="secondCol">
                <p>{props.description}</p>
                <Link to={`/`}>
                    <MDBBtn color="light-green" >Wstecz</MDBBtn>
                </Link>
                
            </MDBCol> 
            </MDBRow>
    )
   
}

export default SystemBasicComponent