import React, { Component } from "react";
import {MDBRow,MDBCol, MDBContainer } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header'
import Navigation from './components/nav/navigation'
import MainBox from './components/MainBox/mainBox'
import Footer from './components/footer/footer'
import Routes from "./Routes";

class App extends Component {

  render(){
    return (
    <MDBContainer fluid className="pageSize" >
    {/* Header */}
        <MDBRow >
          <MDBCol  md="12">
                 <Header/>
          </MDBCol>
        </MDBRow>
{/* nav + mainbox */}
        <MDBRow className="mainBoxRow ">
          <MDBCol  md="3">

              <Navigation/>

          </MDBCol>
          <MDBCol  md="9">

              <MainBox/>

          </MDBCol>
        </MDBRow >


        {/* Footer */}

        <MDBRow 
        className="footerRow">
            <MDBCol 
            className="menuCol"
            md="12">
                <Footer/>
            </MDBCol>
        </MDBRow>
    </MDBContainer>)
  }
  
};

export default App;
