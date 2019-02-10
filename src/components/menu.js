import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";

const Menu =(props)=>{
    let myStyle={
        height:"100%",
        width:"100%",
        margin: "15px"
    }
    return (
            <MDBCard style={{ ...myStyle }}>
                <MDBCardBody>
                    <MDBCardText>
                       TU BĘDZIE MENU :)
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        
    )
}

export default Menu;