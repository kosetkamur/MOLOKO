import React from 'react';

import './Navigation.sass'
import logo from "../../../media/img/logo.svg";

const Navigation = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    return (
        <nav>
            <div className="nav__logo">
                <a href="#">
                    <img src={logo} alt="Логотип ООО МОЛОКО"/>
                </a>
            </div>
            <div className="nav__items">
                <div className="nav__item">
                    <a href="#collaboration">Сотрудничество</a>
                </div>
                <div className="nav__item">
                    <a href="#catalog">Каталог</a>
                </div>
                <div className="nav__item">
                    <a href="#news">Новости</a>
                </div>
                <div className="nav__item">
                    <a href="#contacts">Контакты</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;