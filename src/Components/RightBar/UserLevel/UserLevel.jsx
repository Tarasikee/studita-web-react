import React from 'react';
import s from "./UserLevel.module.css";

const UserLevel = ({level, exp, theme}) => {

    const checkStyles = (style_one, style_two) => {
        return theme === 'black'
            ? style_one//backgroundColor: 'rgba(255, 255, 255, 0.08)'
            : style_two//backgroundColor: 'rgba(0, 0, 0, 0.06)'
    };

    return (
        <div style={
            checkStyles(
                {backgroundColor: 'rgba(255, 255, 255, 0.08)'},
                {backgroundColor: 'rgba(0, 0, 0, 0.06)'})}
             className={s.userLevel}>

            <div className={s.upUserLevel}>
                <span>{level}</span>
                <div style={
                    checkStyles(
                        {background: 'rgba(255, 255, 255, 0.08)'},
                        {background: 'rgba(0, 0, 0, 0.1)'}
                    )
                } className={s.chart}>
                    <div style={{width: exp * 0.1 + '%'}}>

                    </div>
                </div>
                <span style={checkStyles(
                    {background: 'rgba(255, 255, 255, 0.12)', color: 'rgba(255, 255, 255, 0.87)'},
                    {background: 'rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.87)'})}>
                    {level + 1}</span>
            </div>
            <div className={s.downUserLevel}>
                <p style={checkStyles(
                    {color: 'rgba(255, 255, 255, 0.87)'},
                    {color: 'rgba(0, 0, 0, 0.87)'})}>Уровень</p>
                <div style={checkStyles(
                    {color: 'rgba(255, 255, 255, 0.87)'},
                    {color: 'rgba(0, 0, 0, 0.5)'})} className={s.xp}>
                    Опыт: {exp}/1000
                </div>
            </div>
        </div>
    );
};

export default UserLevel;
