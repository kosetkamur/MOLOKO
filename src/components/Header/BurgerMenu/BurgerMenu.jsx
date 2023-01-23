import React, {useState} from 'react';

import './BurgerMenu.sass'
import menu from '../../../media/img/menu.svg'
import SideBar from "./SideBar/SideBar";
import logo from "../../../media/img/logo.svg";

const BurgerMenu = () => {

    const [ hide, setHide ] = useState(false);

    const handleOpenMenu = () => {
        setHide(true)
    }

    const closeSideBar = () => {
        setHide(false)
    }

    return (
        <div className="burger-menu-container">
            <div className="nav__logo">
                <a href="#">
                    <img src={logo} alt="Логотип ООО МОЛОКО"/>
                </a>
            </div>
            {
                (hide) ? <SideBar closeSideBar={ closeSideBar } /> :
                    <div><button className="burger-menu" onClick={ handleOpenMenu }>
                        <img src={ menu } alt="меню"/>
                    </button></div>
            }

        </div>
    );
};

export default BurgerMenu;