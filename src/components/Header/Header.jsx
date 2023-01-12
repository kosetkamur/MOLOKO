import React from 'react';

import './Header.sass'
import logo from '../../media/img/logo.svg'
import Navigation from "./Navigation/Navigation";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
    console.log(window.innerWidth)
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <a href="#">
                            <img src={logo} alt="Логотип ООО МОЛОКО"/>
                        </a>
                    </div>
                    {
                        (window.innerWidth <= 768) ? <BurgerMenu /> : <Navigation />
                    }
                </nav>


                <section className="header-components">
                    <h1>
                        Официальный дистрибьютер
                        крупнейших российских производителей
                    </h1>
                    <p>
                        Продуктов питания и непродовольственных товаров
                    </p>
                    <a href="#form">
                        Стать партнёрами
                    </a>
                </section>
            </div>
        </header>
    );
};

export default React.memo(Header);