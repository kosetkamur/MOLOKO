import React from 'react';

import './Navigation.sass'

const Navigation = () => {
    return (
        <nav>
            <div className="nav__item">
                <a href="#collaboration">Сотрудничество</a>
            </div>
            <div className="nav__item">
                <a href="#logistic">Логистика</a>
            </div>
            <div className="nav__item">
                <a href="#news">Новости</a>
            </div>
            <div className="nav__item">
                <a href="#contacts">Контакты</a>
            </div>
        </nav>
    );
};

export default Navigation;