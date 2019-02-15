import React from 'react';
import './header.css'
import kidHeader from './kidHeader.svg'
class Header extends React.Component {
   
    render() {
       
        return (
            <>
                <header className="headerbox ">

                        <div className="header__items" >  
                            <img src={kidHeader} alt={kidHeader}/>    
                            <p>Ana<span>tomek</span></p>  
                        </div>    
                       
                    </header>
               
                
            </>
        );
    }
}
export default Header