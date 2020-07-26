import React from 'react';
import s from './ItemBar.module.css';
import {NavLink} from "react-router-dom";

const ItemBar = ({path, style, icon, text, isButton, onClick, styleP, theme}) => {


    const checkStyles = (style_one, style_two) => {
        return theme === 'white'
            ? style_one
            : style_two
    };

    return (
        <>
            <div className={s.container}>
                {
                    !isButton
                        ? <NavLink
                            exact
                            className={s.containerItem}
                            to={path}
                            activeClassName={s.active}
                        >
                            <div style={checkStyles({color: 'rgba(0, 0, 0, 0.5)'}, null)} className={
                                theme === 'white' ? s.item + ' ' + s.white : s.item}>
                                {icon}
                                <p style={checkStyles({color: 'rgba(0, 0, 0, 0.5)'}, null)}>{text}</p>
                            </div>
                        </NavLink>
                        : <button
                            onClick={() => onClick()}
                            className={s.containerItem}
                        >
                            <div style={checkStyles({color: 'rgba(0, 0, 0, 0.5)'}, null)} className={
                                theme === 'white' ? s.item + ' ' + s.white : s.item}>
                                {icon}
                                <p style={checkStyles({color: 'rgba(0, 0, 0, 0.5)'}, null)}>{text}</p>
                            </div>
                        </button>
                }
            </div>
        </>
    )
        ;
};

export default ItemBar;
