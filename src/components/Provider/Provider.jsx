import React from 'react';

import './Provider.sass'
import stock from '../../media/img/sklad.png'

const Provider = () => {
    return (
        <div className="provider">
            <div className="requirements">
                <div className="title">
                    <h3>
                        Требования к
                    </h3>
                    <h2>
                        Поставщикам и
                        производителям
                    </h2>
                </div>
                <div className="stock">
                    <img src={ stock } alt="склад" />
                </div>
            </div>
        </div>
    );
};

export default Provider;