import React from 'react'
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom'
import './SystemBasicComponent.css'
const SystemBasicComponent=(props)=>{
    console.log(props)
    return(
        <MDBRow className="mainBox no-gutters systemBox">
            <MDBCol md="6" className="firstCol">
                <img className="systemImg"
                src={props.imgSrc} 
                alt={props.alt}/>
            </MDBCol>
            <MDBCol md="6" className="secondCol">
                <h2>{props.systemName}</h2>
                <p>{props.description}</p>
                <Link to={`/systems`}>
                    <MDBBtn color="light-green" >Wstecz</MDBBtn>
                </Link>
                
            </MDBCol> 
            </MDBRow>
    )
   
}

export default SystemBasicComponent