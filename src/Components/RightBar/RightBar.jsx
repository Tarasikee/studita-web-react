import React from 'react';
// import s from './RightBar.module.css'
import UserLevel from "./UserLevel/UserLevel";
import Statistic from "./Statistic/Statistic";
import FriendsComponent from "./FriendsComponent/FriendsComponent";

const RightBar = ({isLogin, days, level, exp, theme}) => {

    return (
        <div style={{maxWidth: '256px'}}>
            <UserLevel theme={theme} level={level} exp={exp}/>
            <Statistic theme={theme} days={days}/>
            <FriendsComponent theme={theme} isLogin={isLogin}/>
        </div>
    );
};

export default RightBar;
