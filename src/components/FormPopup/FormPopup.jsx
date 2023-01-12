import React from 'react';

import './FormPopup.sass'
import close from '../../media/img/close.svg'

const FormPopup = ({ handleClose }) => {

    const handlePopupClose = () => {
        handleClose()
    }

    return (
        <div className='form-popup'>
            <div className="form">
                <div className="form-container">
                    <div className="form-title">
                        <div className="title">
                            <h3>
                                оставьте заявку на
                            </h3>
                            <h2>
                                Услуги Логистики
                            </h2>
                        </div>
                        <button className="close" onClick={ handlePopupClose}>
                            <img src={ close } alt="кнопка закрыть окно" />
                        </button>
                    </div>

                    <form>
                        <div className="form-items">
                            <div className="form-items__item item1">
                                <label htmlFor='name'>Ваше имя</label>
                                <input type='text' name='name' placeholder='Имя' className="form-input"/>
                            </div>
                            <div className="form-items__item item2">
                                <label htmlFor='phone'>Ваш телефон*</label>
                                <input type='tel' name='phone' placeholder='+7 (   ) __-__-__ ' className="form-input" />
                            </div>
                            <div className="form-items__item item3">
                                <label htmlFor='email'>Ваша почта*</label>
                                <input type='email' name='email' placeholder='Email' className="form-input" />
                            </div>
                            <div className="form-items__item item4">
                                <label htmlFor='company'>Адрес направления</label>
                                <input type='text' name='company' placeholder='г. Москва, ул. Семёновская, д. 1' className="form-input" />
                            </div>
                            <div className="form-items__item item5">
                                <label htmlFor='weight'>Вес груза в кг</label>
                                <input type="number" name="weight" />
                            </div>
                            <div className="form-items__item item6">
                                <label htmlFor='comment'>Описание груза</label>
                                <input type='text' name='comment' placeholder='Описание груза' className="form-input" />
                            </div>
                        </div>
                        <input type='submit' name='submit' value='Отправить' className="form-submit" />
                        <p className='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPopup;