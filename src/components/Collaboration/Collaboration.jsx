import React, {useEffect, useState} from 'react';

import './Collaboration.sass'
import arrow from '../../media/img/arrow.svg'
import Cooperation from "./Cooperation/Cooperation";
import Payment from "./Payment/Payment";
import Delivery from "./Delivery/Delivery";

const Collaboration = () => {

    const [ list, setList ] = useState(true);
    const [ list2, setList2 ] = useState(false);
    const [ list3, setList3 ] = useState(false);

    const openList = () => {
        setList(!list)
        let arrow = document.querySelector('.image1')
        if(list === true){
            arrow.classList.add('imgRotate')
        } else {
            arrow.classList.remove('imgRotate')
        }
    }
    const openList2 = () => {
        setList2(!list2)
        let arrow = document.querySelector('.image2')
        if(list === true){
            arrow.classList.add('imgRotate')
        } else {
            arrow.classList.remove('imgRotate')
        }
    }
    const openList3 = () => {
        setList3(!list3)
        let arrow = document.querySelector('.image3')
        if(list === true){
            arrow.classList.add('imgRotate')
        } else {
            arrow.classList.remove('imgRotate')
        }
    }

    return (
        <section className="collaboration" id="collaboration">
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
                    <div className="drop-down_item" onClick={ openList }>
                        <div className="drop-down_item__title">
                            <h4>Условия сотрудничества</h4>
                            <img src={arrow} alt="стрелочка" className="image1"/>
                        </div>

                        <div className="drop-down_item__list open">
                            { list && <Cooperation />}
                        </div>
                    </div>
                    <div className="drop-down_item drop-down_next" onClick={ openList2 }>
                        <div className="drop-down_item__title">
                            <h4>Условия оплаты</h4>
                            <img src={arrow} alt="стрелочка" className="image2"/>
                        </div>

                        <div className="drop-down_item__list">
                            { list2 && <Payment />}
                        </div>
                    </div>
                    <div className="drop-down_item drop-down_next" onClick={ openList3 }>
                        <div className="drop-down_item__title">
                            <h4>Доставка</h4>
                            <img src={arrow} alt="стрелочка" className="image3"/>
                        </div>

                        <div className="drop-down_item__list">
                            { list3 && <Delivery />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Collaboration);