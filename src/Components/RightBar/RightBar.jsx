import React from 'react';
// import s from './RightBar.module.css'
import UserLevel from "./UserLevel/UserLevel";
import Statistic from "./Statistic/Statistic";
import FriendsComponent from "./FriendsComponent/FriendsComponent";

const RightBar = ({isLogin, days, level, exp}) => {


    return (
        <div style={{maxWidth: '256px'}}>
            <UserLevel level={level} exp={exp}/>
            <Statistic days={days}/>
            <FriendsComponent isLogin={isLogin}/>
        </div>
    );
};

export default RightBar;
