import React from 'react';

import './NewPopup.sass'
import close from '../../media/img/close.svg'

const NewPopup = ({ handleClose, data }) => {

    const handlePopupClose = () => {
        handleClose()
    }

    return (
        <div className='new-popup'>
            <div className="new">
                <div className="new-container">
                    <div className="title">
                        <p className="date">
                            {  data.date }
                        </p>
                        <button className="close" onClick={ handlePopupClose}>
                            <img src={ close } alt="кнопка закрыть окно" />
                        </button>
                    </div>
                    <p className="title">
                        { data.title }
                    </p>
                    <p className="body">
                        { data.body }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewPopup;