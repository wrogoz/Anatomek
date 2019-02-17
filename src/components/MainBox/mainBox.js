import React, { Component } from "react";
import { MDBRow, MDBCol} from "mdbreact";
import './mainBox.css'

class MainBox extends Component{
    render(){
        return(
            <MDBRow className="mainBox no-gutters">
            <MDBCol md="6">
                kolumna imagesBox
            </MDBCol>
                <MDBCol md="6">
                    kolumna descriptionBox
            </MDBCol>
        </MDBRow>
        )
       
    }
}
export default MainBox