import React from 'react'
import { MDBCol, MDBRow, } from "mdbreact";
import { Route, Link } from 'react-router-dom'

import OrgansStarter from './descriptions/organsStarter'
import LiverComponent from './descriptions/liver'
import HeartComponent from './descriptions/heartComponent'
import BrainComponent from './descriptions/brainComponent'
import LungsComponent from './descriptions/lungsComponent'
import StomachComponent from './descriptions/stomachComponent'
import SmallIntestineComponent from './descriptions/smallIntestineComponent'
import LargeIntestineComponent from './descriptions/largeIntestineComponent'
import Girl from './images/girl.svg'
import Brain from './images/brain.svg'
import Lungs from './images/lungs.svg'
import largeIntestine from './images/largeIntestine.svg'
import Stomach from './images/stomach.svg'
import SmallIntestine from './images/smallintestine.svg'
import Liver from './images/liver.svg'
import Heart from './images/heart.svg'
import './organs.css'
const Organs = () => {
    return (
        <MDBRow className="mainBox no-gutters organsBox">
            <MDBCol md="8" lg="6"  className="firstOrgansCol">

                <img src={Girl} alt="girl " id="girl" />
                <Link to={`/organs/brain`} >
                    <img src={Brain} alt="brain " id="brain" />
                </Link>
                <Link to={`/organs/lungs`}>
                    <img src={Lungs} alt="lungs " id="lungs" />
                </Link>
                <Link to={`/organs/largeIntestine`}>
                    <img src={largeIntestine} alt="Large intestine " id="largeIntestine" />
                </Link>
                <Link to={`/organs/stomach`}>
                    <img src={Stomach} alt="stomach" id="stomach" />
                </Link>
                <Link to={`/organs/smallIntestine`}>
                    <img src={SmallIntestine} alt="small intestine " id="smallIntestine" />
                </Link>
                <Link to={`/organs/heart`}>
                    <img src={Heart} alt="Heart" id="heart" />
                </Link>
                <Link to={`/organs/liverComponent`}>
                    <img src={Liver} alt="Liver " id="liver" />
                </Link>

            </MDBCol>
            <MDBCol  md="4" lg="6"  className="secondOrgansCol">
                <Route exact path="/organs" component={OrgansStarter} />
                <Route exact path="/organs/liverComponent" component={LiverComponent} />
                <Route exact path="/organs/heart" component={HeartComponent} />
                <Route exact path="/organs/brain" component={BrainComponent} />
                <Route exact path="/organs/lungs" component={LungsComponent} />
                <Route exact path="/organs/stomach" component={StomachComponent} />
                <Route exact path="/organs/smallIntestine" component={SmallIntestineComponent} />
                <Route exact path="/organs/largeIntestine" component={LargeIntestineComponent} />
            </MDBCol>
        </MDBRow>
    )
}

export default Organs