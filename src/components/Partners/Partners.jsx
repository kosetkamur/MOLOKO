import React, {useEffect, useState} from 'react';

import './Partners.sass'

import GetPartner from "../../api/getPartners";

import {backendHost} from "../../const";

const Partners = () => {

    const [ partners, setPartners ] = useState('');

    useEffect(() => {
        GetPartner.GetImage().then(resp => {
            setPartners(resp);
        });
    }, []);

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
                    {
                        (typeof partners == 'object') ?
                            partners.map((partner, index) => {
                                let url = backendHost + partner.logo;
                                return <div className="logo" key={ index }>
                                            <img src={ url } alt='лого'/>
                                       </div>
                            }) : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default React.memo(Partners);