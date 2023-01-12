import React from 'react';

import './Partners.sass'

import logo1 from '../../media/img/logo_1.png'
import logo2 from '../../media/img/logo_2.png'
import logo3 from '../../media/img/logo_3.png'
import logo4 from '../../media/img/logo_4.png'
import logo5 from '../../media/img/logo_5.png'
import logo6 from '../../media/img/logo_6.png'

const Partners = () => {
    return (
        <div className="partners">
            <div className="container">
                <div className="title">
                    <h3>
                        Наши
                    </h3>
                    <h2>
                        Партнеры
                    </h2>
                </div>
            </div>
            <div className="logos">
                <div className="logos__line1">
                    <div className="logo">
                        <img src={logo1} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo2} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo3} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo4} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo5} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo6} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo1} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo2} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo3} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo4} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo5} alt='лого' />
                    </div>
                    <div className="logo">
                        <img src={logo6} alt='лого' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Partners);