import React from 'react'
import { MDBCol, MDBRow, } from "mdbreact";
import { Route, Link } from 'react-router-dom'
import './senses.css'
import sightImg from './images/senses/sight.svg'
import hearImg from './images/senses/hear.svg'
import smellImg from './images/senses/smell.svg'
import tasteImg from './images/senses/taste.svg'
import touchImg from './images/senses/touch.svg'
import sensesStarter from './descriptions/sensesStarter'
import Hear from './descriptions/hear';
import Sight from './descriptions/sight';
import Smell from './descriptions/smell';
import Taste from './descriptions/taste';
import Touch from './descriptions/touch';




const Senses = () => {
    return (
        <MDBRow className="mainBox no-gutters ">
            <MDBCol md="6" className="firstSensesCol ">
                <Link to={`/senses/sight`} id="sight">
                    <img src={sightImg} alt="sight" className="imgSize" />
                </Link>
                
                <Link to={`/senses/hear`} id="hear">
                    <img src={hearImg} alt="hear" className="imgSize" />
                </Link>
                <Link to={`/senses/taste`} id="taste">
                    <img src={tasteImg} alt="taste" className="imgSize" />
                </Link>
                <Link to={`/senses/touch`} id="touch">
                    <img src={touchImg} alt="touch" className="imgSize" />
                </Link>
                <Link to={`/senses/smell`} id="smell">
                    <img src={smellImg} alt="smell" className="imgSize" />
                </Link>
                
               
                    


            </MDBCol>
            <MDBCol md="6" className="secondSensesCol">
                <Route exact path="/senses" component={sensesStarter} />
                <Route exact path="/senses/Touch" component={Touch} />
                <Route exact path="/senses/hear" component={Hear} />
                <Route exact path="/senses/smell" component={Smell} />
                <Route exact path="/senses/sight" component={Sight} />
                <Route exact path="/senses/taste" component={Taste} />

            </MDBCol>
        </MDBRow>
    )
}

export default Senses

