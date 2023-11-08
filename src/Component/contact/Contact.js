import React from 'react';
import './Contact.css';
import 'leaflet/dist/leaflet.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { MapContainer, TileLayer ,Marker,Popup} from 'react-leaflet';


const Contact=()=>{
    const position =[34.336030, 69.187530];
    return(
        <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>Mahnazfaizi1398@gmail.com</h5>
                <a href="mailto:Mahnazfaizi1398@gmail.com" target="_blank">Send Message</a>
            </article>
            <article className="contact__option">
                <RiMessengerLine className="contact__option-icon"/>
                <h4>Messenger</h4>
                <h5>MahnazFaizi</h5>
                <a href="https://www.facebook.com/mahnaz.faizi.7?mibextid=ZbWKwL" target="_blank">Send Message</a>
            </article>
            <article className="contact__option">
                <BsWhatsapp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5>+93787561943</h5>
                <a href="https://wa.me/qr/M4HE4XY2FVN3I1" target="_blank">Send Message</a>
            </article>
        </div>
        <form action="">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea type="message" name="message" placeholder="Your Message" required ></textarea>
            <button type="submite" className="btn btn-primary">Send Message</button>
        </form>
        <div className="contact-page">
      <MapContainer
        center={position} // Set your desired coordinates here
        zoom={13} // Set the initial zoom level
        scrollWeelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Provide a tile layer source
         attribution ='Map data &copy; <a href="https:www.openstreetmap.org/"> openStreetMap</a> contributors' />
     
      <Marker position={position}>
        <Popup>
          This is the exact location.
        </Popup>
      </Marker>
      </MapContainer>
    </div>

    </div>
    </section>
  );


    
}

export default Contact;