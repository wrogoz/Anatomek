import React from 'react'
import { MDBCol, MDBRow, } from 'mdbreact';
import human from './images/human.svg';
import skull from './images/skull.svg';
import ribCage from './images/ribCage.svg';
import liver from './images/liver.svg';
import './phantom.css'

class Phantom extends React.Component{
    state={
        skull:{
                display:true,
                info:'text',
                buttonTxt:"ukryj"
        },
        heart: {
            display: true,
            info: 'text',
            buttonTxt:"ukryj"
        },
        liver: {
            display: true,
            info: 'text',
            buttonTxt:"ukryj"
        },
        stomach: {
            display: true,
            info: 'text',
            buttonTxt:"ukryj"
        },
        lungs: {
            display: true,
            info: 'text',
            buttonTxt:"ukryj"
        },
        ribCage: {
            display: true,
            info: 'text',
            buttonTxt:"ukryj"
        },
        vascularSys: {
            display: true,
            info: 'text',
            buttonTxt:"ukryj"
        }

        
    }
    render(){
        return (
            <MDBRow className="mainBox no-gutters">
                <MDBCol md="6" className="firstPhantomCol">
                    <div id="human">
                    <img src={human} alt="human"  />
                        <div id="skull">
                             <img src={skull} alt="skull"  />
                        </div>
                        <div id="ribCage">
                            <img src={ribCage} alt="ribCage" />
                        </div>
                        <div id="liver">
                            <img src={liver} alt="liver" />
                        </div>
                    </div>
                    
                    

                </MDBCol>
                <MDBCol md="6" className="secondPhantomCol">
                
                </MDBCol>
            </MDBRow>
        )
    }
}

export default Phantom