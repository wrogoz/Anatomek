import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";

const MainBox=(props)=>{

    let style={
        margin:"15px",
        height:"100%"
    }
    return (<MDBCard style={style}>
        <MDBCardBody>
            <MDBCardText>
                Main Box
            </MDBCardText>
        </MDBCardBody>
    </MDBCard>)
    
}

export default MainBox