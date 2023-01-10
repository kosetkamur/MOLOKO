import React from 'react';

import './Collaboration.sass'
import arrow from '../../media/img/arrow.png'

const Collaboration = () => {
    return (
        <section className="collaboration">
            <div className="container">
                <div className="title">
                    <h3>
                        условия
                    </h3>
                    <h2>
                        сотрудничества
                    </h2>
                </div>
                <div className="drop-down">
                    <div className="drop-down_item">
                        <div className="drop-down_item__title">
                            <h4>Условия сотрудничества</h4>
                            <img src={arrow} alt="стрелочка" />
                        </div>
                        <div className="drop-down_item__list">
                            <div className="list_item">
                                <div className="list_item__circle">
                                    1
                                </div>
                                <p>
                                    Ежедневный прием заявок без выходных
                                </p>
                            </div>
                            <div className="list_item">
                                <div className="list_item__circle">
                                    2
                                </div>
                                <p>
                                    Ежедневный прием заявок без выходных
                                </p>
                            </div>
                            <div className="list_item">
                                <div className="list_item__circle">
                                    3
                                </div>
                                <p>
                                    Ежедневный прием заявок без выходных
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaboration;