import React from 'react';
import s from './Statistic.module.css'
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';

const Statistic = ({days, theme}) => {

    const activeDays = e => {
        if (e > 0) {
            return '#E0601F'
        } else if (theme === 'black') {
            return 'rgba(255, 255,255, 0.5)'
        } else {
            return 'rgba(0, 0, 0, 0.3)'
        }
    };

    const checkStyles = (style_one, style_two) => {
        return theme === 'black'
            ? style_one
            : style_two
    };

    return (
        <div style={checkStyles(
            {background: 'rgba(255, 255, 255, 0.08)'},
            {background: 'rgba(0, 0, 0, 0.06)'})} className={s.static}>
            <div>
                <WhatshotOutlinedIcon style={{color: activeDays(days), transition: '500ms ease-out', marginRight: '18px', fontSize: '28px'}}/>
            </div>
            <div className={s.daysInRow}>
                <p style={checkStyles(
                    {color: 'rgba(255, 255, 255, 0.87)'},
                    {color: 'rgba(0, 0, 0, 0.87)'})}>{days} дней подряд</p>
            </div>
        </div>
    );
};

export default Statistic;
