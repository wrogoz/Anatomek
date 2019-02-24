import React from 'react'
import { MDBCol, MDBRow, } from 'mdbreact';
import human from './images/human.svg';
import skull from './images/skull.svg';
import ribCage from './images/ribCage.svg';
import liver from './images/liver.svg';
import heart from './images/heart.svg';
import lungs from './images/lungs.svg';
import stomach from './images/stomach.svg';
import './phantom.css'
import { timingSafeEqual } from 'crypto';

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
    ShowHideHandler = (e) => {
    //  console.log(e.target.dataset.id)
    // //    if(e.target.dataset.id===false){
    // //        console.log('dziala')
    // //    }
    //     let name = e.target.dataset.id;
    //     this.setState({
    //         name: {
    //             display : false
    //         }
    //     });
    }   
    render(){
        return (
            <MDBRow className="mainBox no-gutters">
                <MDBCol md="6" className="firstPhantomCol">
                    <div id="humanPhantom">
                    <img src={human} alt="human"  />

                        {this.state.skull.display === true ? <div id="skullPhantom">
                            <img src={skull} alt="skull" />
                        </div>:null} 
                        <div id="ribCagePhantom">
                            <img src={ribCage} alt="ribCage" />
                        </div>
                        <div id="liverPhantom">
                            <img src={liver} alt="liver" />
                        </div>
                        <div id="heartPhantom">
                            <img src={heart} alt="heart" />
                        </div>
                        <div id="stomachPhantom">
                            <img src={stomach} alt="stomach" />
                        </div>
                        <div id="lungsPhantom">
                            <img src={lungs} alt="lungs" />
                        </div>
                    </div>
                    
                    

                </MDBCol>
                <MDBCol md="6" className="secondPhantomCol">
                    <button data-id="skull" onClick={this.ShowHideHandler}>{this.state.skull.buttonTxt} czaszkę</button>
                        <button>{this.state.heart.buttonTxt} serce</button>
                        <button>{this.state.liver.buttonTxt} wątrobę</button>
                        <button>{this.state.stomach.buttonTxt} żołądek</button>
                        <button>{this.state.lungs.buttonTxt} płuca</button>
                        <button>{this.state.ribCage.buttonTxt} klatkę piersiową</button>
                        <button>{this.state.vascularSys.buttonTxt} naczynia krwionośne</button>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default Phantom