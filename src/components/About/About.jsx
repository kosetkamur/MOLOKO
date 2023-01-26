import React, {useEffect, useState} from 'react';

import './About.sass'
import GetAbout from "../../api/getAbout";
import Fact from "./Fact/Fact";

const About = () => {

    const [ data, setData ] = useState('');

    useEffect(() => {
        GetAbout.GetContent().then(resp => {
            setData(resp);
        });
    }, []);

    let facts = data.facts;

    return (
        <section className="about-company">
            <div className="container">
                <div className="about-company-wrapper">
                    <div className="title">
                        <h3>
                            О компании
                        </h3>
                        <h2>
                            { data.name }
                        </h2>
                    </div>
                    <div className="content-about-company">
                        <div className="subscribe">
                            <p className="subtitle">
                                { data.description }
                            </p>
                            <img src={ 'http://zinchi5d.beget.tech'+data.map_image } alt="Карта покупателей и поставщиков" className="mapImage"/>
                        </div>
                        <div className="facts">
                            {
                                (typeof facts == 'object') ? data.facts.map((item, index) => <Fact fact={ item } key={ index } />) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);