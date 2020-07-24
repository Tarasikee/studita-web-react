import React from 'react';
import s from "./UserLevel.module.css";

const UserLevel = props => {

    const {level, exp} = props;

    return (
        <div className={s.userLevel}>
            <div className={s.upUserLevel}>
                <span style={{marginRight: '18px', background: '#1A73E8'}}>{level}</span>
                <div className={s.chart}>
                    <div style={{width: exp * 0.1 + '%'}}>

                    </div>
                </div>
                <span style={{marginLeft: '18px'}}>{level + 1}</span>
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
