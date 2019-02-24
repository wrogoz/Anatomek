import React from 'react'
import { MDBCol, MDBRow, } from 'mdbreact';
import human from './images/human.svg';
import humanNovasc from './images/humanWithoutVascular.svg'
import skull from './images/skull.svg';
import ribCage from './images/ribCage.svg';
import liver from './images/liver.svg';
import heart from './images/heart.svg';
import lungs from './images/lungs.svg';
import stomach from './images/stomach.svg';
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
    hideShowHandler = (organ) => {
        this.setState((prevState) => {
          
            return {
                [organ]: { ...prevState[organ], display: !prevState[organ].display }
            }
        })
    }
    
    render(){
        return (
            <MDBRow className="mainBox no-gutters">
                <MDBCol md="6" className="firstPhantomCol">
                   <div id="humanPhantom">
                        <img src={human} alt="human" />
                   

                        {this.state.skull.display === true ? <div id="skullPhantom">
                            <img src={skull} alt="skull" />
                        </div>:null} 
                        {this.state.ribCage.display === true ? <div id="ribCagePhantom">
                            <img src={ribCage} alt="ribCage" />
                        </div>:null}
                        {this.state.liver.display === true ? <div id="liverPhantom">
                            <img src={liver} alt="liver" />
                        </div>:null}
                        {this.state.heart.display === true ? <div id="heartPhantom">
                            <img src={heart} alt="heart" />
                        </div>:null}
                        {this.state.stomach.display === true ?<div id="stomachPhantom">
                            <img src={stomach} alt="stomach" />
                        </div>:null}
                        {this.state.lungs.display === true ? <div id="lungsPhantom">
                            <img src={lungs} alt="lungs" />
                        </div>:null}
                        
                    </div>
                    
                    

                </MDBCol>
                <MDBCol md="6" className="secondPhantomCol">
                    <button onClick={() => { this.hideShowHandler("skull"); }}>{this.state.skull.buttonTxt} czaszkę</button>
                    <button onClick={() => { this.hideShowHandler("heart"); }}>{this.state.heart.buttonTxt} serce</button>
                    <button onClick={() => { this.hideShowHandler("liver"); }}>{this.state.liver.buttonTxt} wątrobę</button>
                    <button onClick={() => { this.hideShowHandler("stomach"); }}>{this.state.stomach.buttonTxt} Żołądek</button>
                    <button onClick={() => { this.hideShowHandler("lungs"); }}>{this.state.lungs.buttonTxt} Płuca</button>
                    <button onClick={() => { this.hideShowHandler("ribCage"); }}>{this.state.ribCage.buttonTxt} klatkę piersiową</button>
                        <button>{this.state.vascularSys.buttonTxt} naczynia krwionośne</button>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default Phantom