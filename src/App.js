import React, { Component } from "react";
import {MDBRow,MDBCol, MDBContainer } from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/header'
import MainBox from './components/MainBox/mainBox'
import Footer from './components/footer/footer'
import Navigation from './components/nav/navigation'
import MobileNavigation from './components/nav/mobileNavigation'
class App extends Component {

  render(){
      return(
      <Router >
       <MDBContainer fluid  >
          {/* Header */}
          <MobileNavigation/>
          <MDBRow >
              <Header/>
          </MDBRow>

          {/* navi + mainBox */}

          <MDBRow className="no-gutters  ">

              <MDBCol  md="2" >
                  <Navigation/>
              </MDBCol>

              <MDBCol  md="10" >
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
