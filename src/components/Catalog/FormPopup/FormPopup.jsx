import React, {useState} from 'react';
import axios from 'axios';
import PhoneInput from 'react-input-mask';

import './FormPopup.sass'
import close from '../../../media/img/close.svg'

const FormPopup = ({ handleClose }) => {

    const initialState = {
        name: "",
        contact_phone: "",
        email: "",
        company_name: ""
    }

    const [ data, setData ] = useState({initialState})

    const handleSubmit = e => {
        e.preventDefault();

        var formdata = new FormData();
        formdata.append('name', data.name);
        formdata.append('contact_phone', data.contact_phone);
        formdata.append('email', data.email);
        formdata.append('company_name', data.company_name);



        axios({
            method: "post",
            url: "http://zinchi5d.beget.tech/api/bids.price_list.create",
            data: formdata,
            headers: { "Content-Type": "text/html; charset=utf-8" },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });

        setData({
            name: "",
            contact_phone: "",
            email: "",
            company_name: "",
        })
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setData({...data, [name]: value})
    }

    const handlePopupClose = () => {
        handleClose()
    }




    const [value, setValue] = useState()





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
                                Прайс-лист
                            </h2>
                        </div>
                        <button className="close" onClick={ handlePopupClose}>
                            <img src={ close } alt="кнопка закрыть окно" />
                        </button>
                    </div>

                    <form onSubmit={ handleSubmit }>
                        <div className="form-items">
                            <div className="form-items__item item1">
                                <label htmlFor='name'>Ваше имя*</label>
                                <input type='text'
                                       name='name'
                                       placeholder='Имя'
                                       className="form-input"
                                       value={ data.name || "" }
                                       onChange={ handleInputChange }/>
                            </div>
                            <div className="form-items__item item2">
                                <label htmlFor='company_name'>Наименование компании*</label>
                                <input type='text'
                                       name='company_name'
                                       placeholder='Компания'
                                       className="form-input"
                                       value={ data.company_name || "" }
                                       onChange={ handleInputChange }/>
                            </div>
                            <div className="form-items__item item3">
                                <label htmlFor='contact_phone'>Ваш телефон*</label>
                                {/*<input type='tel'*/}
                                {/*       name='contact_phone'*/}
                                {/*       placeholder='+7 (   ) __-__-__ '*/}
                                {/*       className="form-input"*/}
                                {/*       value={ data.contact_phone || "" }*/}
                                {/*       onChange={ handleInputChange }/>*/}

                                <PhoneInput
                                    name='contact_phone'
                                    placeholder='+7 (   ) __-__-__ '
                                    className="form-input"
                                    value={ data.contact_phone || "" }
                                    onChange={handleInputChange}>
                                </PhoneInput>
                            </div>
                            <div className="form-items__item item4">
                                <label htmlFor='email'>Ваша почта*</label>
                                <input type='email'
                                       name='email'
                                       placeholder='Email'
                                       className="form-input"
                                       value={ data.email || "" }
                                       onChange={ handleInputChange }/>
                            </div>
                        </div>
                        <input type='submit' name='submit' value='Запросить прайс-лист' className="form-submit" />
                        <p className='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPopup;