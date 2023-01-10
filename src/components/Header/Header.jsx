import React from 'react';

import './Header.sass'
import logo from '../../media/img/logo.svg'

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <a href="src/components/Header/Header#">
                            <img src={logo} alt="Логотип ООО МОЛОКО"/>
                        </a>
                    </div>
                    <div className="nav__menu">
                        <div className="nav__menu_item">
                            <a href="src/components/Header/Header#">Сотрудничество</a>
                        </div>
                        <div className="nav__menu_item">
                            <a href="src/components/Header/Header#">Логистика</a>
                        </div>
                        <div className="nav__menu_item">
                            <a href="src/components/Header/Header#">Новости</a>
                        </div>
                        <div className="nav__menu_item">
                            <a href="src/components/Header/Header#">Контакты</a>
                        </div>
                    </div>
                </nav>


                <section className="header-components">
                    <h1>
                        Официальный дистрибьютер
                        крупнейших российских производителей
                    </h1>
                    <p>
                        Продуктов питания и непродовольственных товаров
                    </p>
                    <button>
                        Стать партнёрами
                    </button>
                </section>
            </div>
        </header>
    );
};

export default Header;