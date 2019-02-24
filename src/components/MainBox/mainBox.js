import React, { Component } from "react";
import { Route} from 'react-router-dom'
import Start from "./StartPage/start"
import SystemsMenu from './SystemsMenu/systemsMenu'
import SkeletalSystem from './Systems/skeletalSystem'
import MuscleSystem from './Systems/muscleSystem'
import NervousSystem from './Systems/nervousSystem'
import DigestiveSystem from "./Systems/digestiveSystem";
import RespiratorySystem from "./Systems/respiratorySystem";
import VascularSystem from "./Systems/vascularSystem";
import Organs from "./organs/organs";
import Senses from "./senses/senses"
import Phantom from "./phantom/phantom"
import './mainBox.css'

class MainBox extends Component{
    render(){
        return(
            // tu wyswietlam różne pierdoły tu bedzie routing etc.
       
      <div>
            <Route exact path="/" component={Start} />
            <Route exact path="/systems" component={SystemsMenu} />
            <Route path="/skeletalSystem" component={SkeletalSystem} />
            <Route path="/muscleSystem" component={MuscleSystem} />
            <Route path="/nervousSystem" component={NervousSystem} />
            <Route path="/digestiveSystem" component={DigestiveSystem} />
            <Route path="/respiratorySystem" component={RespiratorySystem} />
            <Route path="/vascularSystem" component={VascularSystem} />
            <Route path="/organs" component={Organs} />
            <Route path="/senses" component={Senses} />
            <Route path="/fantom" component={Phantom} />
        </div>
  
            
        )
       
    }
}
export default MainBox