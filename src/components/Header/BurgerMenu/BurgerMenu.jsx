import React, {useState} from 'react';

import './BurgerMenu.sass'
import menu from '../../../media/img/menu.svg'
import Navigation from "../Navigation/Navigation";

const BurgerMenu = () => {

    const [ hide, setHide ] = useState(false);

    const handleOpenMenu = () => {
        setHide(!hide)
    }

    return (
        <>
            {
                (hide) ? <Navigation /> :
                    <button className="burger-menu" onClick={ handleOpenMenu }>
                        <img src={ menu } alt="меню"/>
                    </button>
            }

        </>
    );
};

export default BurgerMenu;