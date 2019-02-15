import React from 'react';
import Header from './header/header';
import Navigation from  './menuList/navigation'
import Footer from './footer/footer'
const Menu = (props) => {
    return ( <>
                <Header/>
                <Navigation/>
                <Footer/>
        </> )
}
export default Menu;