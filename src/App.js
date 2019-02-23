import React, { Component } from "react";
import {MDBRow,MDBCol, MDBContainer } from "mdbreact";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/header'
import Navigation from './components/nav/navigation'
import MainBox from './components/MainBox/mainBox'
import Footer from './components/footer/footer'


class App extends Component {

  render(){
    return (<Router>
    <MDBContainer fluid  >
    {/* Header */}

      <MDBRow >
              <Header/>
      </MDBRow>

    {/* navi + mainBox */}

        <MDBRow className="no-gutters z-depth-2 ">

          <MDBCol md="2" >
              <Navigation/>
        </MDBCol>

          <MDBCol md="10" >
              <MainBox/>
        </MDBCol>
      </MDBRow>

      {/* footer */}
      <MDBRow>

          <MDBCol md="12" >
            <Footer />
          </MDBCol>

      </MDBRow>
    </MDBContainer>
    </Router>)
  }
  
};

export default App;
