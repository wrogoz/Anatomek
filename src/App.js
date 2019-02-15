import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,MDBRow,MDBCol, MDBNavItem, MDBFooter, MDBNavLink, MDBContainer } from "mdbreact";
import Menu from './components/menu/menu'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {

  render(){
    return (
    <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="menuCol" md="3">
                  <Menu/>
          </MDBCol>
          <MDBCol className="mainBoxCol" md="9">.col-md-10</MDBCol>
        </MDBRow>
    </MDBContainer>)
  }
  
};

export default App;
