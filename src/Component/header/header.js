import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/images/ME.jpg';
import HeaderSocials from './HeaderSocials';

const Header=()=>{
    return(
        <div id="header">
              <div className="container header_container" >
                <h5>Hello I'm</h5>
                <h1>Mahnaz Faizi</h1>
                 <h5 className="text-light">Fullstack Developer</h5>
                 <CTA/>
                 <HeaderSocials/>
                 <a href="#contact" className="scroll__down">Scroll Down</a>

                 <div className="me">
                     <img src={Me} className="img"/>
                 </div>
                
            </div> 
            
        </div>
           
        
    )
}

export default Header;