import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/images/photo1.PNG';
import IMG2 from '../../assets/images/photo2.PNG';
import IMG3 from '../../assets/images/photo3.PNG';
import IMG4 from '../../assets/images/photo4.PNG';
import IMG5 from '../../assets/images/photo5.PNG';
import IMG6 from '../../assets/images/photo6.PNG';

const data = [
  {
    id : 1,
    image:IMG1,
    title :'1.	Dice Game: A thrilling web game crafted using JavaScript, HTML, and CSS.',
   github: 'https://github.com/Mahnazfaizi/Dice-Game',
   
  
  },

  {
    id : 2,
    image:IMG2,
    title :'React Museum Website:  museum experience, meticulously crafted using React.js',
   github: 'https://github.com/Mahnazfaizi/React-Website',
  
  
  },
  {
    id : 3,
    image:IMG3,
    title :' Simon-Game: This classic Simon game recreated using JavaScript, HTML, and CSS',
   github: 'https://github.com/Mahnazfaizi/Simon-Game',
  
  
  },
  {
    id : 4,
    image:IMG4,
    title :' Bootstrap Service Project: A visually appealing project built using Bootstrap 4',
   github: 'https://github.com/Mahnazfaizi/Bootstrap-Service-Project',
   
  
  },
  {
    id : 5,
    image:IMG5,
    title :'CRUD App: A robust application developed with PHP and MySQL,(Ceate,Read,Update,Update,Delete)',
   github: 'https://github.com/Mahnazfaizi/PHP-Crud-App',
 
  
  },
  {
    id : 6,
    image:IMG6,
    title :'Watch Shop Website: A stylish online storefront designed with HTML and CSS ',
   github: 'https://github.com/Mahnazfaizi/Watch-Shop-Website',
   
  
  },
]


const Portfolio=()=>{
    return(
        <section id="Portfolio">
          <h5>My Works</h5>
          <h2>Portfolio</h2>
          <div className="container portfolio__container">
            {
              data.map(({id , image , title  ,github})=>{
                return(
                  <article  key={id}className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
              {/* <a href={github} className="btn" target='_blank'>Github</a> */}
              <a href={github} className="btn btn-primary" target='_blank'>Github</a>
              </div>
             
            </article>
                )
              })
            }
          </div>
        </section>
    )
}

export default Portfolio;