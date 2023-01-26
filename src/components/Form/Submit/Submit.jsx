import React, {useEffect, useState} from 'react';
import Agreement from "./Agreement/Agreement";



const Submit = ({ response }) => {

    let phrase =  <p style={{color: 'green'}}>Ваша заявка принята на рассмотрение</p>

    return (
        <div className="form-submit">
            <input type='submit' name='submit' value='Отправить заявку'/>
            { response && phrase }
            <Agreement />
        </div>
    );
};

export default Submit;