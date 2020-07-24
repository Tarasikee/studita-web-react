import React from 'react';
import s from "./LevelItem.module.css";

const LevelItem = props => {

    const {
        tags,
        isInteresting,
        interestingDescription,
        interestingTitle,
        subscribeTitle,
        title,
        description,
        levelProgress,
        style,
        isSubscribe,
        button
    } = props;

    const isEnded = e => {
        if (e === 15) {
            return (
                <span style={{color: '#1A73E8'}} className={s.ended}>Завершено</span>
            )
        } else if (e === 1) {
            return (
                <span className={s.ended}>{e} задание из 15</span>
            )
        } else if (e <= 4) {
            return (
                <span className={s.ended}>{e} задания из 15</span>
            )
        } else {
            return (
                <span className={s.ended}>{e} заданий из 15</span>
            )
        }
    };

    const tagsMapper = e => {
        return e.map(eTag => '#' + eTag + ' ')
    };

    const levelType = () => {
        if (isInteresting && !isSubscribe) {
            return (
                <div style={{width: '100%'}}>
                    <div style={style} className={`${s.levelItem} ${s.InterestingLevel}`}>
                        <p className={s.tagStyle}>{tagsMapper(tags)}</p>
                        <h5>{interestingTitle}</h5>
                        <p className={s.interestingDescription}>{interestingDescription}</p>
                    </div>
                </div>
            )
        } else if (!isInteresting && !isSubscribe) {
            return (
                <div style={style} className={s.levelItem}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div className={s.chart}>
                        <span>Прогресс: </span> {isEnded(levelProgress)}
                        <div>
                            <div style={{width: (6.666 * levelProgress) + '%'}}>

                            </div>
                        </div>
                    </div>
                </div>)
        } else if (!isInteresting && isSubscribe) {
            return (
                <div style={style} className={`${s.levelItem} ${s.SubscribeLevel}`}>
                    <p>{subscribeTitle}</p>
                    <p><a href={"./"}>{button}</a></p>
                </div>
            )
        }
    };

    return (
        <div>
            {levelType()}
        </div>
    );
};

export default LevelItem;
