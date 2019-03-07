import React from 'react'
import { MDBCol, MDBRow,MDBBtn  } from 'mdbreact';
import human from './images/human.svg';
import humanNovasc from './images/humanWithoutVascular.svg'
import skull from './images/skull.svg';
import ribCage from './images/ribCage.svg';
import liver from './images/liver.svg';
import heart from './images/heart.svg';
import lungs from './images/lungs.svg';
import stomach from './images/stomach.svg';
import intestine from './images/intestine.svg'
import urinary from './images/urinarySystem.svg'
import esophagus from './images/esophagus.svg'
import './phantom.css'


class Phantom extends React.Component{
   state={
        skull:{
                display:false,
                info:'text'
        },
        heart: {
            display: false,
            info: 'text'
        },
        liver: {
            display: false,
            info: 'text',
        },
        stomach: {
            display: false,
            info: 'text'
        },
        lungs: {
            display: false,
            info: 'text'
        },
        ribCage: {
            display: false,
            info: 'text'
        },
        vascularSys: {
            display: false,
            info: 'text'
        },
       intestine: {
           display: false,
           info: 'text'
       },
       urinary: {
           display: false,
           info: 'text'
       },
       esophagus: {
           display: false,
           info: 'text'
       }
    
}
    hideShowHandler = (organ) => {
        
        this.setState((prevState) => {
          
            return {
                [organ]: { ...prevState[organ], display: !prevState[organ].display}
            }
        })
    }
    
    render(){
        return (
            <MDBRow className="mainBox no-gutters phantomBox">
                <MDBCol md="6" className="firstPhantomCol">
                   <div id="humanPhantom">
                        {this.state.vascularSys.display === true ? <img src={human} alt="human" /> : <img src={humanNovasc} alt="human" />}
                   

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
                        {this.state.intestine.display === true ? <div id="intestinePhantom">
                            <img src={intestine} alt="intestine" />
                        </div> : null}
                        {this.state.urinary.display === true ? <div id="urinaryPhantom">
                            <img src={urinary} alt="urinary" />
                        </div> : null}
                        {this.state.esophagus.display === true ? <div id="esophagusPhantom">
                            <img src={esophagus} alt="esophagus" />
                        </div> : null}
                        
                    </div>
                    
                    

                </MDBCol>
                <MDBCol md="6" className="secondPhantomCol">
                    <MDBBtn
                        className="phantomBtn" 
                        color="light-green"
                        onClick={() => { this.hideShowHandler("skull"); }}>{this.state.skull.display?"Ukryj":"Pokaż"} czaszkę
                    </MDBBtn>
                    <MDBBtn 
                        className="phantomBtn" 
                        color="light-green" 
                        onClick={() => { this.hideShowHandler("heart"); }}>{this.state.heart.display?"Ukryj":"Pokaż"} serce
                    </MDBBtn>
                    <MDBBtn 
                        className="phantomBtn" 
                        color="light-green" 
                        onClick={() => { this.hideShowHandler("liver"); }}>{this.state.liver.display?"Ukryj":"Pokaż"} wątrobę
                    </MDBBtn>
                    <MDBBtn 
                        className="phantomBtn" 
                        color="light-green" 
                        onClick={() => { this.hideShowHandler("stomach"); }}>{this.state.stomach.display?"Ukryj":"Pokaż"} Żołądek
                    </MDBBtn>
                    <MDBBtn 
                        className="phantomBtn" 
                        color="light-green" 
                        onClick={() => { this.hideShowHandler("lungs"); }}>{this.state.lungs.display?"Ukryj":"Pokaż"} Płuca
                    </MDBBtn>
                    <MDBBtn 
                        className="phantomBtn" 
                        color="light-green" 
                        onClick={() => { this.hideShowHandler("ribCage"); }}>{this.state.ribCage.display?"Ukryj":"Pokaż"} klatkę piersiową
                    </MDBBtn>
                    <MDBBtn 
                        className="phantomBtn" 
                        color="light-green" 
                        onClick={() => { this.hideShowHandler("vascularSys"); }}>{this.state.vascularSys.display?"Ukryj":"Pokaż"} Naczynia krwionośne
                    </MDBBtn>      
                    <MDBBtn
                        className="phantomBtn"
                        color="light-green"
                        onClick={() => { this.hideShowHandler("intestine"); }}>{this.state.intestine.display ? "Ukryj" : "Pokaż"} Jelita
                    </MDBBtn> 
                    <MDBBtn
                        className="phantomBtn"
                        color="light-green"
                        onClick={() => { this.hideShowHandler("urinary"); }}>{this.state.urinary.display ? "Ukryj" : "Pokaż"} Układ moczowy
                    </MDBBtn>
                    <MDBBtn
                        className="phantomBtn"
                        color="light-green"
                        onClick={() => { this.hideShowHandler("esophagus"); }}>{this.state.esophagus.display ? "Ukryj" : "Pokaż"} Przełyk
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default Phantom