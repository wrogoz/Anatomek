import React from 'react';
import './header.css'
import kidHeader from './kidHeader.svg'
import {  MDBCol } from "mdbreact";
class Header extends React.Component {
   
    render() {
       
        return (
            <MDBCol md="12">
                <header className="headerbox ">
                        <div className="header__items" >  
                            <img src={kidHeader} alt={kidHeader}/>    
                            <p>Ana<span>tomek</span></p>  
                        </div>      
                    </header>
            </MDBCol>
        );
    }
}
export default Header