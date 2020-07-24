import React from 'react';
import s from './Statistic.module.css'
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';

const Statistic = props => {

    const {days} = props;

    const activeDays = e => {
        if (e > 0) {
            return '#E0601F'
        } else {
            return 'rgba(255, 255,255, 0.5)'
        }
    };

    return (
        <div className={s.static}>
            <div>
                <WhatshotOutlinedIcon style={{color: activeDays(days), marginRight: '18px', fontSize: '28px'}}/>
            </div>
            <div className={s.daysInRow}>
                <p>{days} дней подряд</p>
            </div>
        </div>
    );
};

export default Statistic;
