import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>

    <section className='header'>
        <div className="container">
            <div className="header__head">
                <div className="logo">
                    <h1>IT-ACADEMY</h1>
                </div>

                <div className="header__navigation">
                    <a href="">Курсы</a>
                    <a href="">Бесплатный урок</a>
                    <a href="">Филиалы</a>
                    <a href="">Контакты</a>
                </div>

                <button>Позвонить</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header