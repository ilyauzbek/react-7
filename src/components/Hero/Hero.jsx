import React from 'react'
import './Hero.scss'

function Hero() {
  return (
   <>
   <section className="hero">
    <div className="container">
        <div className="hero__box">
            <h1>IT курсы в <br/> Ташкенте</h1>
            <p>Нам доверяют уже больше 4 лет</p>

            
            <div className="hero__btns">
                <button>получить консультацию</button>
                <button>записаться на бесплатный урок</button>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Hero