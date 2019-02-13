import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,MDBRow,MDBCol, MDBNavItem, MDBFooter, MDBNavLink, MDBContainer } from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {

  render(){
    return (
    <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="12">.col-md-12</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="3">.col-md-3</MDBCol>
          <MDBCol md="9">.col-md-9</MDBCol>
        </MDBRow>

    </MDBContainer>)
  }
  
};

export default App;
