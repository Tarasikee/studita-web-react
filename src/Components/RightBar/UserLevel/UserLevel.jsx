import React from 'react';
import s from "./UserLevel.module.css";

const UserLevel = ({level, exp, theme}) => {

    const checkStyleForTheme = (style_one, style_two) => {
        return theme === 'black'
            ? style_one//backgroundColor: 'rgba(255, 255, 255, 0.08)'
            : style_two//backgroundColor: 'rgba(0, 0, 0, 0.06)'
    };

    return (
        <div style={
            checkStyleForTheme(
                {backgroundColor: 'rgba(255, 255, 255, 0.08)'},
                {backgroundColor: 'rgba(0, 0, 0, 0.06)'})}
             className={s.userLevel}>

            <div className={s.upUserLevel}>
                <span>{level}</span>
                <div style={
                    checkStyleForTheme(
                        {background: 'rgba(255, 255, 255, 0.08)'},
                        {background: 'rgba(0, 0, 0, 0.1)'}
                    )
                } className={s.chart}>
                    <div style={{width: exp * 0.1 + '%'}}>

                    </div>
                </div>
                <span style={checkStyleForTheme(
                    {background: 'rgba(255, 255, 255, 0.12)'},
                    {background: 'rgba(0, 0, 0, 0.12)'})}>
                    {level + 1}</span>
            </div>
            <div className={s.downUserLevel}>
                <p>Уровень</p>
                <div className={s.xp}>
                    Опыт: {exp}/1000
                </div>
            </div>
        </div>
    );
};

export default UserLevel;
