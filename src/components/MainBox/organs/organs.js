import React from 'react'
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import Girl from './images/girl.svg'
import Brain from './images/brain.svg'
import Lungs from './images/lungs.svg'
import largeIntestine from './images/largeIntestine.svg'
import Stomach from './images/stomach.svg'
import SmallIntestine from './images/smallintestine.svg'
import Liver from './images/liver.svg'
import Heart from './images/heart.svg'
import './organs.css'
const Organs=()=>{
    return(
        <MDBRow className="mainBox no-gutters">
            <MDBCol md="6" className="firstOrgansCol">
                <img src={Girl} alt="girl image" id="girl" />
               <img src={Brain} alt="brain image" id="brain"/>
               <img src={Lungs} alt="lungs image" id="lungs"/>
               <img src={largeIntestine} alt="Large intestine image" id="largeIntestine"/>
               <img src={Stomach} alt="stomach image" id="stomach"/>
               <img src={SmallIntestine} alt="small intestine image" id="smallIntestine"/>
               <img src={Heart} alt="Heartimage" id="heart"/>
               <img src={Liver} alt="Liver image" id="liver"/>
            </MDBCol>
            <MDBCol md="6" className="secondOrgansCol">
               

            </MDBCol>
        </MDBRow>
    )
}

export default Organs