import React from 'react';

import './Form.sass'

const Form = () => {
    return (
        <div className="form-cooperation">
            <div className="form">
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
                        <div className="form-items__item">
                            <label for='name'>Ваше имя</label>
                            <input type='text' name='name' placeholder='Имя' />

                            <label for='phone'>Ваш телефон*</label>
                            <input type='tel' name='phone' placeholder='+7 (   ) __-__-__ ' />

                            <label for='email'>Ваша почта*</label>
                            <input type='email' name='email' placeholder='Email' />
                        </div>
                        <div className="form-items__item">
                            <label for='company'>Наименование компании</label>
                            <input type='text' name='company' placeholder='Компания' />

                            <label for='file'>Прикрепите файлы</label>
                            <p>Файл не выбран</p>
                            <input type='file' name='file'/>

                            <label for='comment'>Ваш комментарий</label>
                            <input type='text' name='comment' placeholder='Ваш комментарий' />
                        </div>
                    </div>
                    <input type='submit' name='submit' value='Отправить заявку' />
                    <p class='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</p>
                </form>
            </div>
        </div>
    );
};

export default Form;