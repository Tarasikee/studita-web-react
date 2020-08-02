import React from 'react';
import s from './LearningComponent.module.css';
import LevelItem from "./LevelItem/LevelItem";
import {useCookies} from 'react-cookie';

const LearningComponent = ({LevelsData, theme}) => {


    let key = 0;
    const [cookies] = useCookies(['LEVEL_COOKIE']);

    const cookieExist = e => {
        if (typeof cookies.LEVEL_COOKIE === undefined) {
            return cookies.LEVEL_COOKIE.chapter_number === e.chapter_number
                ? cookies.LEVEL_COOKIE.progress
                : 0
        } else {
            return 0
        }
    };

    const backgroundByKey = s => {
        if (s > 3) {
            return {
                width: '296px',
                marginLeft: '22px',
                WebkitMaskImage: 'linear-gradient(to top, transparent 20%, black 210%)',
                transition: 'none',
                cursor: 'auto',
                userSelect: 'none'
            }
        } else if (5 % s === 0) {
            return {
                width: '296px',
                marginLeft: '22px'
            }
        } else {
            return {
                width: '296px'
            }
        }
    };


    const renderLevel = LevelsData.map(level => {
        return (
            <>
                <div className={theme === 'white' ? `${s.levelNumber} ${s.white}` : `${s.levelNumber}`}>{level.level_number} УРОВЕНЬ</div>
                <div className={s.levelsTable}>
                    {
                        Array.from(level.children, e => {
                            let levelKey = key++;
                            // debugger
                            switch (e.type) {
                                case 'chapter':
                                    return <LevelItem
                                        key={levelKey}
                                        theme={theme}
                                        title={e.title}
                                        description={e.subtitle}
                                        levelProgress={cookieExist(e)}
                                        style={backgroundByKey(levelKey)}
                                        isSubscribe={false}
                                        isInteresting={false}
                                    />;
                                case 'interesting':
                                    return <LevelItem
                                        key={levelKey}
                                        theme={theme}
                                        interestingTitle={e.title}
                                        interestingDescription={e.subtitle}
                                        style={{width: '298px', marginTop: '22px', border: 'none'}}
                                        isInteresting={true}
                                        isSubscribe={false}
                                        tags={e.tags}
                                    />;

                                case 'subscribe':
                                    return <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <LevelItem
                                            key={levelKey}
                                            theme={theme}
                                            subscribeTitle={e.title}
                                            isSubscribe={true}
                                            isInteresting={false}
                                            style={{border: 'none'}}
                                            button={e.button[0]}
                                        />
                                    </div>;

                                default:
                                    return null;
                            }
                        })
                    }
                </div>
            </>
        )
    });

    return (
        <div className={s.container}>
            <div className={s.row}>
                {
                    renderLevel
                }
            </div>
        </div>
    );
};

export default LearningComponent;
