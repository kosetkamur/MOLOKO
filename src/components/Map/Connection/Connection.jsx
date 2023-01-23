import React from 'react';
import email from "../../../media/img/email.svg";
import tel from "../../../media/img/tel.svg";
import geo from "../../../media/img/geo.svg";

const Connection = () => {
    return (
        <div className="connection">
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
                    <img src={ email } alt="почта" />
                    <div className="contactsData_item__text">
                        <p>
                            moloko.optom@mail.ru
                        </p>
                        <p className="bukh">
                            Бухгалтерия
                        </p>
                        <p>
                            opt.moloko.bukh@bk.ru
                        </p>
                    </div>
                </div>
                <div className="contactsData_item">
                    <img src={ tel } alt="телефон" />
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
                    <img src={ geo } alt="геолокация" />
                    <div className="contactsData_item__text">
                        <p>
                            г.Москва, Горбунова д2, стр 3, помещение 2, этаж 3, комната 396
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connection;