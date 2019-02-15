import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const Header = (props) => {
    return(<>
        <MDBRow>
            <MDBCol md="12">zdjęcie</MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol md="12">
                <p>ANATOMEK</p>
            </MDBCol>
        </MDBRow>
    </>)
}

export default Header;

