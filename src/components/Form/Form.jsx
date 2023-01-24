import React, {useState} from 'react';
import axios from 'axios';

import './Form.sass'
import clip from '../../media/img/clip.svg'

const Form = () => {
    const [ file, setFile ] = useState('Файл не выбран');
    const fileInput = React.createRef();

    let initialState = {
        full_name: "",
        contact_phone: "",
        email: "",
        company_name: "",
        comment: "",
    }
    const [ data, setData ] = useState(initialState);


    const handleSubmit = event => {
        event.preventDefault();

        const cooperation = {
            full_name: data.full_name,
            contact_phone: data.contact_phone,
            email: data.email,
            company_name: data.company_name,
            comment: data.comment,
            document: fileInput.current.files[0]
        };
        console.log(cooperation)
        let a = JSON.stringify(cooperation)

        axios.post(`http://zinchi5d.beget.tech/api/bids.cooperation.create`, a)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(e => console.log(e))
    }
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setData({...data, [name]: value})
    }
    console.log(data)

    let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
        input.addEventListener('change', function (e) {
            let countFiles = 0;
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;
            if (countFiles)
                setFile(`Выбрано файлов: ${countFiles}`)
        });
    });



    return (
        <div className="form-cooperation" id="form">
            <div className="form">
                <div className="form-container">
                    <div className="title">
                        <h3>
                            оставьте заявку на
                        </h3>
                        <h2>
                            Сотрудничество
                        </h2>
                    </div>

                    <form onSubmit={ handleSubmit }>
                        <div className="form-items">
                            <div className="form-items__item item1">
                                <label htmlFor='full_name'>Ваше имя</label>
                                <input type='text'
                                       name='full_name'
                                       placeholder='Имя'
                                       className="form-input"
                                       value={ data.full_name || "" }
                                       onChange={ handleInputChange } />
                            </div>
                            <div className="form-items__item item2">
                                <label htmlFor='contact_phone'>Ваш телефон*</label>
                                <input type='tel'
                                       name='contact_phone'
                                       placeholder='+7 (   ) __-__-__ '
                                       className="form-input"
                                       value={ data.contact_phone || "" }
                                       onChange={ handleInputChange } />
                            </div>
                            <div className="form-items__item item3">
                                <label htmlFor='email'>Ваша почта*</label>
                                <input type='email'
                                       name='email'
                                       placeholder='Email'
                                       className="form-input"
                                       value={ data.email || "" }
                                       onChange={ handleInputChange } />
                            </div>
                            <div className="form-items__item item4">
                                <label htmlFor='company_name'>Наименование компании</label>
                                <input type='text'
                                       name='company_name'
                                       placeholder='Компания'
                                       className="form-input"
                                       value={ data.company_name || "" }
                                       onChange={ handleInputChange } />
                            </div>
                            <div className="form-items__item item5">
                                <label htmlFor='file'>Прикрепите файл</label>
                                <input name="file"
                                       type="file"
                                       id="field__file-2"
                                       className="field field__file"
                                       ref={ fileInput } />

                                <label className="field__file-wrapper" htmlFor="field__file-2">
                                    <div className="field__file-fake">{ file }</div>
                                    <div className="field__file-button"><img src={ clip } alt="скрепка" /></div>
                                </label>
                            </div>
                            <div className="form-items__item item6">
                                <label htmlFor='comment'>Ваш комментарий</label>
                                <input type='text'
                                       name='comment'
                                       placeholder='Ваш комментарий'
                                       className="form-input"
                                       value={ data.comment || "" }
                                       onChange={ handleInputChange }/>
                            </div>
                        </div>
                        <div className="form-submit">
                            <input type='submit' name='submit' value='Отправить заявку'/>
                            <p className='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;