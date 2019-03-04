import React from 'react';
import './header.css'
import anatomek from './anatomek3.svg'
import {  MDBCol } from "mdbreact";
class Header extends React.Component {
   
    render() {
       
        return (
            <MDBCol md="12">
                <header className="headerbox header__items">
                         
                            <img src={anatomek} alt={anatomek}/>    
                            <p>Ana<span>tomek</span></p>  
                          
                    </header>
            </MDBCol>
        );
    }
}
export default Header