import React from 'react';
import s from './Header.module.css'

const Header = props => {

    const {isLogin, theme} = props;

    return (
        <header style={theme === 'black' ? {border: '1px solid rgba(255, 255, 255, 0.12)'} : null}>
            <div className={s.logotype}>
                <img alt={"Something Wrong!"} src={"./favicon.svg"}/>
                <span style={theme === 'black' ? {color: 'rgba(255, 255, 255, 0.87)'} : null}>Studita</span>
            </div>
            <div style={theme === 'black' ? {color: 'rgba(255, 255, 255, 0.87)'} : null}>
                Обучение
            </div>
            {
                !isLogin
                    ? <div className={s.loginLink}><a href={"./"}>Войти</a></div>
                    : <div className={s.loginLink}><a href={"./"}>Выйти</a></div>
            }
        </header>
    );
};

export default Header;
