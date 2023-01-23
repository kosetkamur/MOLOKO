import React from 'react';

import './Provider.sass'

const Provider = () => {
    return (
        <div className="provider">
            <div className="container">
                <div className="wrapper">
                    <div className="line"></div>
                    <div className="title">
                        <h3>
                            Требования к
                        </h3>
                        <h2>
                            Поставщикам и<br />
                            производителям
                        </h2>
                    </div>
                    <div className="requirements">
                        <div className="requirements__item">
                            <div className="requirements__item_circle">
                                1
                            </div>
                            <p className="requirements__item_text">
                                Качество и безопасность<br /> предлагаемой продукции
                            </p>
                        </div>
                        <div className="requirements__item">
                            <div className="requirements__item_circle">
                                2
                            </div>
                            <p className="requirements__item_text">
                                Качество и безопасность<br /> предлагаемой продукции
                            </p>
                        </div>
                        <div className="requirements__item">
                            <div className="requirements__item_circle">
                                3
                            </div>
                            <p className="requirements__item_text">
                                Качество и безопасность<br /> предлагаемой продукции
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Provider);