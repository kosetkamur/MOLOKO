import React, {useState} from 'react';

import './About.sass'
import map from '../../media/img/map.svg'

const About = () => {

    // const [ num, setNum ] = useState([0, 0, 0, 0, 0, 0]);
    //
    // const txt = document.querySelectorAll('[data-num]');
    //
    // txt.forEach((item, index) => {
    //     let maxNum = item.dataset.num;
    //     let start = 0;
    //
    //     let fun = setInterval(function () {
    //         if(maxNum > 1000) {
    //             start += 200;
    //         }
    //         if(maxNum > 20 && maxNum < 1000) {
    //             start += 10;
    //         }
    //         if(maxNum > 1 && maxNum <= 20) {
    //             start += 1;
    //         }
    //         if (start === Number(maxNum)) {
    //             clearInterval(fun);
    //         }
    //         setNum(() => num[index]=start)
    //     }, 20);
    // })


    return (
        <section className="about-company">
            <div className="container">
                <div className="about-company-wrapper">
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
                            <img src={map} alt="Карта покупателей и поставщиков" className="map"/>
                        </div>
                        <div className="facts">
                            <div className="facts__item">
                                <p className="facts__item_num num1" data-num="5">0</p>
                                <p className="facts__item_text">место по объему розничной выручки</p>
                            </div>
                            <div className="facts__item">
                                <p className="facts__item_num num2" data-num="10">0</p>
                                <p className="facts__item_text">место по объему розничной выручки</p>
                            </div>
                            <div className="facts__item">
                                <p className="facts__item_num" data-num="3800">0</p>
                                <p className="facts__item_text">место по объему розничной выручки</p>
                            </div>
                            <div className="facts__item">
                                <p className="facts__item_num" data-num="12">0</p>
                                <p className="facts__item_text">место по объему розничной выручки</p>
                            </div>
                            <div className="facts__item">
                                <p className="facts__item_num" data-num="20">0</p>
                                <p className="facts__item_text">место по объему розничной выручки</p>
                            </div>
                            <div className="facts__item">
                                <p className="facts__item_num" data-num="100">0</p>
                                <p className="facts__item_text">место по объему розничной выручки</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);