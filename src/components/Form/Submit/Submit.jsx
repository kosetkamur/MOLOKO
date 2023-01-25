import React, {useEffect, useState} from 'react';

import GetAgreement from "../../../api/getAgreement";

const Submit = () => {

    const [ file, setFile ] = useState();

    useEffect(() => {
        GetAgreement.GetFile().then(resp => {
            setFile(resp);
        });
    }, []);
    console.log(typeof file.file)

    return (
        <div className="form-submit">
            <input type='submit' name='submit' value='Отправить заявку'/>
            <a href={ file } download className='agree'>Нажимая кнопку отправки, вы даете согласие на обработку своих персональных данных</a>
        </div>
    );
};

export default Submit;