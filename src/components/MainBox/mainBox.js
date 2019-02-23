import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SystemsMenu from './SystemsMenu/systemsMenu'
import SkeletalSystem from './Systems/skeletalSystem'
import MuscleSystem from './Systems/muscleSystem'
import NervousSystem from './Systems/nervousSystem'
import DigestiveSystem from "./Systems/digestiveSystem";
import RespiratorySystem from "./Systems/respiratorySystem";
import VascularSystem from "./Systems/vascularSystem";
import './mainBox.css'

class MainBox extends Component{
    render(){
        return(
            // tu wyswietlam różne pierdoły tu bedzie routing etc.
  <Router >         
      <div>
            <Route exact path="/" component={SystemsMenu} />
            <Route exact path="/systems" component={SystemsMenu} />
            <Route path="/skeletalSystem" component={SkeletalSystem} />
            <Route path="/muscleSystem" component={MuscleSystem} />
            <Route path="/nervousSystem" component={NervousSystem} />
            <Route path="/digestiveSystem" component={DigestiveSystem} />
            <Route path="/respiratorySystem" component={RespiratorySystem} />
            <Route path="/vascularSystem" component={VascularSystem} />
        </div>
  </Router >
            
        )
       
    }
}
export default MainBox