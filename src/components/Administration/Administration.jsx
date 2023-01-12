import React from 'react';

import './Administration.sass'

import human1 from '../../media/img/human1.png'
import human2 from '../../media/img/human2.png'
import human3 from '../../media/img/human3.png'
import human4 from '../../media/img/human4.png'

const Administration = () => {
    return (
        <div id="administration">
            <div className="container">
                <div className="administration">
                    <div className="administration__title title">
                        <h3>
                            ООО «МОЛОКО»
                        </h3>
                        <h2>
                            Управление
                        </h2>
                    </div>

                    <div className="administration__items">
                        <div className="administration__items_item">
                            <img src={ human1 } alt="Поляков Д.В." />
                            <div className="title">
                                <h4>Поляков Д.В.</h4>
                                <p>Собственник</p>
                            </div>
                        </div>
                        <div className="administration__items_item">
                            <img src={ human2 } alt="Москвин И.В." />
                            <div className="title">
                                <h4>Москвин И.В.</h4>
                                <p>Коммерческий директор</p>
                            </div>
                        </div>
                        <div className="administration__items_item">
                            <img src={ human3 } alt="Поляков В.В." />
                            <div className="title">
                                <h4>Поляков В.В.</h4>
                                <p>Генеральный директор</p>
                            </div>
                        </div>
                        <div className="administration__items_item">
                            <img src={ human4 } alt="Приветова Н.А." />
                            <div className="title">
                                <h4>Приветова Н.А.</h4>
                                <p>Главный бухгалтер</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Administration);