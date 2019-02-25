import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './systemsMenu.css'
import SystemsListElement from './listElement';

const SystemsMenu =(props)=>{
    return (<MDBRow className="mainBox no-gutters">
        <MDBCol md="12">
            <ul >
                <SystemsListElement  title="Układ Nerwowy" route="nervousSystem"/>
                <SystemsListElement title="Układ Szkieletowy" route="skeletalSystem"/>
                <SystemsListElement title="Układ Naczyniowy" route="vascularSystem"/>
                <SystemsListElement title="Układ Mięśniowy" route="muscleSystem"/>
                <SystemsListElement title="Układ Pokarmowy" route="digestiveSystem"/>
                <SystemsListElement title="Układ Oddechowy" route="respiratorySystem"/>
            </ul>
    </MDBCol>
    </MDBRow>)
}

export default SystemsMenu