import React, { Component } from "react";
import {MDBRow,MDBCol, MDBContainer } from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/header'
import MainBox from './components/MainBox/mainBox'
import Footer from './components/footer/footer'
import NaviRwd from './components/nav/NaviRWD'
import Burger from './components/nav/brugerMenu'
class App extends Component {
  state = {
    width:window.innerWidth
}

Resize = () => this.setState({
    width: window.innerWidth

  });

  componentDidMount() {
    window.addEventListener('resize', this.Resize)
  }

  render(){
    if (this.state.width < 768) {
      return(
        <Router>
          
        <MDBContainer fluid  >
        {/* Header */}
          <Burger id="burger" /> 
          <MDBRow >
                  <Header/>
          </MDBRow>
    
        {/* navi + mainBox */}
    
            <MDBRow className="no-gutters  ">
    
              
    
              <MDBCol md="12" >
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

      
      }else{
    return (<Router>
    <MDBContainer fluid  >
    {/* Header */}

      <MDBRow >
              <Header/>
      </MDBRow>

    {/* navi + mainBox */}

        <MDBRow className="no-gutters  ">

          <MDBCol md="2" >
              <NaviRwd/>
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
  }
  
};

export default App;
