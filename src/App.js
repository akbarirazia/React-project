import React from 'react';
import Header from './Component/header/header';
 import Nav from './Component/nav/nav';
import About from './Component/about/about';
import Portfolio from './Component/experience/Portfolio';
import Skill from './Component/skills/skill';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/footer';
import './App.css';
import video from './assets/images/video-bg.mp4';

function App() {
    return(
      <div id="video" > 
           <video autoPlay muted loop  id="myVideo"  src={video} alt="video"/> 
               <div id="one">
               <Header/>
                   <Nav/>
                   <About/>
                   <Portfolio/>
                   <Skill/>
                   <Contact/>
                 <Footer/> 
               </div>
      </div>      

    );
    
}

export default App;


