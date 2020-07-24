import React from 'react';
import s from './ItemBar.module.css';
import {NavLink} from "react-router-dom";

const ItemBar = ({path, style, icon, text, isButton, onClick, styleP}) => {



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
                            <div style={style} className={s.item}>
                                {icon}
                                <p style={styleP}>{text}</p>
                            </div>
                        </NavLink>
                        : <button
                            onClick={() => onClick()}
                            className={s.containerItem}
                        >
                            <div style={style} className={s.item}>
                                {icon}
                                <p style={styleP}>{text}</p>
                            </div>
                        </button>
                }
            </div>
        </>
    )
        ;
};

export default ItemBar;
