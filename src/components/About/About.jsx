import React from 'react';

import './About.sass'
import map from '../../media/img/map.svg'

const About = () => {
    return (
        <section className="about-company">
            <div className="container">
                <div className="title">
                    <h3>
                        О компании
                    </h3>
                    <h2>
                        ООО «МОЛОКО»
                    </h2>
                </div>
                <div className="content-about-company">
                    <div className="subscribe">
                        <p className="subtitle">
                            Опорный дистрибьютор молочной продукции эконом-сегмента
                            для Юга РФ и Сибири. С 2021 года вышел на рынок СТМ с
                            собственным брендом консервной продукции.
                        </p>
                        <img src={map} alt="Карта покупателей и поставщиков"/>
                    </div>
                    <div className="facts">
                        <div className="facts__item">
                            <p className="facts__item_num num1">0</p>
                            <p className="facts__item_text">место по объему розничной выручки</p>
                        </div>
                        <div className="facts__item">
                            <p className="facts__item_num num2">5</p>
                            <p className="facts__item_text">место по объему розничной выручки</p>
                        </div>
                        <div className="facts__item">
                            <p className="facts__item_num">5</p>
                            <p className="facts__item_text">место по объему розничной выручки</p>
                        </div>
                        <div className="facts__item">
                            <p className="facts__item_num">5</p>
                            <p className="facts__item_text">место по объему розничной выручки</p>
                        </div>
                        <div className="facts__item">
                            <p className="facts__item_num">5</p>
                            <p className="facts__item_text">место по объему розничной выручки</p>
                        </div>
                        <div className="facts__item">
                            <p className="facts__item_num">5</p>
                            <p className="facts__item_text">место по объему розничной выручки</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;