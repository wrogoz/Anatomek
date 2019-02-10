import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class TopNavBar extends React.Component {
   

   
    render() {

        let style={
            backgroundColor:"#D0E741",
            height:"20%"
        }
 
        return (
                <header>
                        <Router>
                    <MDBNavbar style={style} dark expand="md" className="d-flex justify-content-center">
                                <MDBNavbarBrand >
                                    <strong className="black-text">Anatomek Logo</strong>
                                </MDBNavbarBrand>
                            </MDBNavbar>
                        </Router>

                </header>

      
        );
    }
}

export default TopNavBar;