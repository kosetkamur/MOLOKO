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


    useEffect(() => {
        let arrow = document.querySelector('.image1')
        if(list === true){
            arrow.classList.add('imgRotate')
        } else {
            arrow.classList.remove('imgRotate')
        }

        let arrow2 = document.querySelector('.image2')
        if(list2 === true){
            arrow2.classList.add('imgRotate')
        } else {
            arrow2.classList.remove('imgRotate')
        }

        let arrow3 = document.querySelector('.image3')
        if(list3 === true){
            arrow3.classList.add('imgRotate')
        } else {
            arrow3.classList.remove('imgRotate')
        }
    }, [list, list2, list3])


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
                    <div className="drop-down_item" onClick={ ()=> setList(e => !e) }>
                        <div className="drop-down_item__title">
                            <h4>Условия сотрудничества</h4>
                            <img src={arrow} alt="стрелочка" className="image1"/>
                        </div>

                        <div className="drop-down_item__list open">
                            { list && <Cooperation />}
                        </div>
                    </div>
                    <div className="drop-down_item drop-down_next" onClick={ ()=> setList2(e => !e) }>
                        <div className="drop-down_item__title">
                            <h4>Условия оплаты</h4>
                            <img src={arrow} alt="стрелочка" className="image2"/>
                        </div>

                        <div className="drop-down_item__list">
                            { list2 && <Payment />}
                        </div>
                    </div>
                    <div className="drop-down_item drop-down_next" onClick={ ()=> setList3(e => !e) }>
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