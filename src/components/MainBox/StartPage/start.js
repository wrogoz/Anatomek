import React from 'react'
import { MDBCol, MDBRow} from "mdbreact";
import './startPage.css'
const Start = () => {
    
    return (
        <MDBRow className="mainBox no-gutters ">
            <MDBCol md="12" className=" starter">
               <h1>Witaj Odkrywco!</h1>
               <h2>Nazywam się Tomek i zapraszam Cię do przeżycia niesamowitej przygody jaką jest poznanie własnego ciała.</h2>
               <h3>Udanej zabawy!</h3>
            </MDBCol>
        </MDBRow>
    )

}

export default Start