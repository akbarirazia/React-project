import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import logo from '../../assets/images/logo1.png'

const Footer=()=>{
    return(
        <div id="footer">
            <a href="#" className="footer__logo"><img src={logo}/></a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/mahnaz.faizi.7?mibextid=ZbWKwL"><FaFacebookF/></a>
                <a href="https://instagram.com/mnz_1381?igshid=MzNlNGNkZWQ4Mg=="><FiInstagram/></a>
                <a href="https://twitter.com/mahnaz_faizi?t=1GWuN2fnDNHu9w1QH9RrNA&s=35"><IoLogoTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;MAHNZ Portfolio Website </small>
            </div>
        </div>
    )
}

export default Footer;