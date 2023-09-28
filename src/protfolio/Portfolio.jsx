import React from 'react'
import './portfolio.css'
import IMG1 from '../../src/assets/myfolio.png'
import IMG2 from '../../src/assets/portfolio2.png'
import IMG3 from '../../src/assets/gym.png'
import IMG4 from '../../src/assets/textutils.png'
import IMG5 from '../../src/assets/redstore.png'
import IMG6 from '../../src/assets/barber.png'



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
          <h3>MyFolio Blog Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/myfolio.github.io/" className="btn" target="_blank">Github</a>
          <a href="https://udayan285.github.io/myfolio.github.io/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>MohoFood Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/mohoFood/" className="btn" target="_blank">Github</a>
          <a href="https://udayan285.github.io/mohoFood/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>Gym Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/gym/" className="btn" target="_blank">Github</a>
          <a href="https://udayan285.github.io/gym/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>
            TextUtils - Word counter, Character counter, Remove extra spaces
          </h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/textutils/" className="btn" target="_blank">Github</a>
          <a href="https://udayan285.github.io/textutils/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3>RedStore E-commerce Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/EcommerceProject.github.io/" className="btn" target="_blank">Github</a>
          <a href="https://udayan285.github.io/EcommerceProject.github.io/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="portfolio1" />
          </div>
          <h3>Barber Shop Project</h3>
          <div className="portfolio__item-cta">
          <a href="https://udayan285.github.io/barber-shop.github.io/" className="btn" target="_blank">Github</a>
          <a href="https://udayan285.github.io/barber-shop.github.io/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
  
  
     
      
      </div>
    </section>
  )
}

export default Portfolio