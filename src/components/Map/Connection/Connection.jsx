import React from 'react';
import email from "../../../media/img/email.svg";
import tel from "../../../media/img/tel.svg";
import geo from "../../../media/img/geo.svg";

const Connection = () => {
    return (
        <div className="connection">
            <div className="connection-wrapper">
            <div className="title">
                <h3>
                    свяжитесь с нами
                </h3>
                <h2>
                    Контакты
                </h2>
            </div>
            <div className="contactsData">
                <div className="contactsData_item">
                    <div className="contactsData_item__img">
                        <img src={ email } alt="почта" />
                    </div>
                    <div className="contactsData_item__text">
                        <a href="mailto:moloko.optom@mail.ru">
                            <p>moloko.optom@mail.ru</p>
                        </a>
                        <p className="bukh">
                            Бухгалтерия
                        </p>
                        <a href="mailto:opt.moloko.bukh@bk.ru">
                            <p>
                                opt.moloko.bukh@bk.ru
                            </p>
                        </a>
                    </div>
                </div>
                <div className="contactsData_item">
                    <div className="contactsData_item__img">
                        <img src={ tel } alt="телефон" className="phone"/>
                    </div>
                    <div className="contactsData_item__text">
                        <p>
                            8-495-795-77-11
                        </p>
                        <p>
                            Многоканальный
                        </p>
                        <p className="bukh">
                            8-800-700-84-70
                        </p>
                        <p>
                            звонок по России бесплатный
                        </p>
                    </div>
                </div>
                <div className="contactsData_item">
                    <div className="contactsData_item__img">
                        <img src={ geo } alt="геолокация" />
                    </div>
                    <div className="contactsData_item__text">
                        <p>
                            г.Москва, Горбунова д2, стр 3, помещение 2, этаж 3, комната 396
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Connection;