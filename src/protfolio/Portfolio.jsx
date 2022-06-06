import React from 'react'
import './portfolio.css'
import IMG1 from '../../src/assets/portfolio1.jpg'
import IMG2 from '../../src/assets/portfolio2.jpg'
import IMG3 from '../../src/assets/portfolio3.jpg'
import IMG4 from '../../src/assets/portfolio4.jpg'
import IMG5 from '../../src/assets/portfolio5.png'
import IMG6 from '../../src/assets/portfolio6.jpg'



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/myfolio.github.io/" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="portfolio1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn" target="_blank">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
  
  
     
      
      </div>
    </section>
  )
}

export default Portfolio