import React from 'react';
import { MDBRow, MDBCol} from "mdbreact";

const Navigation = (props) => {
    return (<>
        <MDBRow>
            <MDBCol md="12">
                <ul>
                    <li>Start</li>
                    <li>Systemy Ciała</li>
                    <li>Organy</li>
                    <li>Zmysły</li>
                </ul>
            </MDBCol>
        </MDBRow>
    </>)
}

export default Navigation;