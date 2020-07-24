import React from 'react';
import s from './FriendsComponent.css'

const FriendsComponent = ({isLogin}) => {
    return (
        !isLogin
            ? <div>
                <h3 className={s.title}>Мои друзья</h3>
                <p className={s.textNotRegister}>
                    <a href={"./"}>Войдите в аккаунт</a>, чтобы
                    просматривать список своих
                    друзей
                </p>
            </div>
            : null
    );
};

export default FriendsComponent;
