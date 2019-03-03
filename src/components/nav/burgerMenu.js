import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import Navigation from './navigation';
import './navigation.css'    

class HamburgerMenu extends Component {
    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    render() {
        return (
          
                <MDBNavbar   id="burger">
                        <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
                        <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
                            
                                <Navigation/>   
                        </MDBCollapse>
                </MDBNavbar>
            
        );
    }
}

export default HamburgerMenu;