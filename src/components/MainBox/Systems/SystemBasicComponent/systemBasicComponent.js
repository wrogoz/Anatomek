import React from 'react'
import { MDBCol,MDBRow } from "mdbreact";
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
            </MDBCol> 
            </MDBRow>
    )
   
}

export default SystemBasicComponent