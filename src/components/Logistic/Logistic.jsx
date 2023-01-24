import React from 'react';

import './Logistic.sass';

import icon1 from '../../media/img/icon1.svg';
import icon2 from '../../media/img/icon2.svg';
import icon3 from '../../media/img/icon3.svg';

const Logistic = ({ handleClick }) => {

    const buttonClick = () => {
        handleClick()
    }

    return (
        <div id="logistic">
            <div className="container">
                <div className="logistic">
                    <div className="logistic__title title">
                        <h3>
                            услуги
                        </h3>
                        <h2>
                            логистики
                        </h2>
                    </div>
                    <div className="logistic__description">
                        <p>
                            Предоставляем услуги логистики по всей России и странам СНГ, с собственной транспортной сетью. Мы уделяем большое внимание качеству выполняемых услуг, поэтому большинство заказчиков становятся нашими постоянными клиентами. Имеем развитую сеть наработанных маршрутов, которые позволяют доставлять груз в срок.
                        </p>
                        <button onClick={ buttonClick } className="showBig">
                            Консультация
                        </button>
                    </div>
                    <div className="logistic__facts">
                        <div className="logistic__facts_item">
                            <img src={ icon1 } alt="иконка доллара" />
                            <p>
                                Любая форма<br />
                                оплаты
                            </p>
                        </div>
                        <div className="logistic__facts_item line">
                            <img src={ icon2 } alt="иконка доллара" />
                            <p>
                                10 лет <br />
                                профессиональной работы
                            </p>
                        </div>
                        <div className="logistic__facts_item">
                            <img src={ icon3 } alt="иконка доллара" />
                            <p>
                                Электронный<br />
                                документоборот
                            </p>
                        </div>
                    </div>
                    <button onClick={ buttonClick } className="showSmall">
                        Консультация
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Logistic);