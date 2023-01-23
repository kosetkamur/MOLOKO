import React, {useState} from 'react';

import './Form.sass'
import clip from '../../media/img/clip.svg'

const Form = () => {
    const [ file, setFile ] = useState('Файл не выбран');

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
                                <label htmlFor='company'>Наименование компании</label>
                                <input type='text' name='company' placeholder='Компания' className="form-input" />
                            </div>
                            <div className="form-items__item item5">
                                <label htmlFor='file'>Прикрепите файл</label>
                                <input name="file" type="file" name="file" id="field__file-2" className="field field__file" />

                                <label className="field__file-wrapper" htmlFor="field__file-2">
                                    <div className="field__file-fake">{ file }</div>
                                    <div className="field__file-button"><img src={ clip } alt="скрепка" /></div>
                                </label>
                            </div>
                            <div className="form-items__item item6">
                                <label htmlFor='comment'>Ваш комментарий</label>
                                <input type='text' name='comment' placeholder='Ваш комментарий' className="form-input" />
                            </div>
                        </div>
                        <div className="form-submit">
                            <input type='submit' name='submit' value='Отправить заявку' />
                            <p className='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;