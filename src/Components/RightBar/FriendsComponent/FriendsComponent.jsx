import React from 'react';
import './FriendsComponent.css'

const FriendsComponent = ({isLogin, theme}) => {

    const checkStyles = (style_one, style_two) => {
        return theme === 'black'
            ? style_one
            : style_two
    };

    return (
        !isLogin
            ? <div>
                <h3 style={
                    checkStyles(
                        {color: 'rgba(255, 255, 255, 0.87)'},
                        {color: 'rgba(0, 0, 0, 0.87)'}
                    )
                }>Мои друзья</h3>
                <p style={checkStyles(
                    {color: 'rgba(255, 255, 255, 0.5)'},
                    {color: 'rgba(0, 0, 0, 0.5)'}
                )}>
                    <a href={"./"}>Войдите в аккаунт</a>, чтобы
                    просматривать список своих
                    друзей
                </p>
            </div>
            : null
    );
};

export default FriendsComponent;
