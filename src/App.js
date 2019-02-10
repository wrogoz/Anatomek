import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TopNavBar from "./components/navbar";
import Menu from "./components/menu"
import MainBox from "./components/MainBox"
import FooterText from "./components/footer"
class App extends Component {

 

  render() {
    const global={
      height:"100vh",
     
    }
   const firstRow={
    height:"72%"
   }
    let secondRow = {
      height: "10%",
      width: "100%",
      margin:"0",
      marginTop: "30px"

    }
    return (
      <MDBContainer fluid style={global} >
        <TopNavBar/>
        <MDBRow style={firstRow}>
          <MDBCol md="2" className=".z-depth-2">
                   <Menu />
          </MDBCol>
          
          <MDBCol md="10" className=".z-depth-2">
                    <MainBox/>
          </MDBCol>
        </MDBRow>
        <MDBRow style={secondRow}>
          <MDBCol md="12" className=".z-depth-2">
                  <FooterText/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    
    );
  }
}

export default App;
