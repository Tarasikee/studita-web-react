import React, {useState} from 'react';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ItemBar from "./ItemBar/ItemBar";
import ModalOnTheme from "./ModalOnTheme/ModalOnTheme";

const LeftBar = props => {

    let {isLogin, theme, LanguageMenu, onChangeBackground} = props;

    const [open, setOpen] = useState(false);

    const handleOpenTheme = () => {
        setOpen(true);
    };

    const handleCloseTheme = () => {
        setOpen(false);
    };

    const handleColorAndMarginBottom = () => {

        if (theme === 'white' && !isLogin) {
            return {color: 'rgba(0, 0, 0, 0.5)', marginBottom: '14px'}
        } else if (theme === 'white' && isLogin)  {
            return {color: 'rgba(0, 0, 0, 0.5)', marginBottom: '0'}
        } else if (theme !== 'white' && !isLogin) {
            return {color: 'rgba(255, 255, 255, 0.5)', marginBottom: '14px'}
        } else if (theme !== 'white' && !isLogin) {
            return {color: 'rgba(255, 255, 255, 0.5)', marginBottom: '14px'}
        }
    };


    return (
        <div style={{maxWidth: '256px'}}>
            <ItemBar
                path={"/"}
                style={theme === 'white' ? {color: 'rgba(0, 0, 0, 0.5)'} : null}
                styleP={theme === 'white' ? {color: 'rgba(0, 0, 0, 0.5)'} : null}
                text={"Обучение"}
                icon={<SchoolOutlinedIcon/>}
            />

            <ItemBar
                path={"/fight"}
                style={theme === 'white' ? {color: 'rgba(0, 0, 0, 0.5)'} : null}
                styleP={theme === 'white' ? {color: 'rgba(0, 0, 0, 0.5)'} : null}
                text={"Состязания"}
                icon={<GroupOutlinedIcon/>}
            />

            <ItemBar
                path={"/achievements"}
                style={handleColorAndMarginBottom()}
                styleP={theme === 'white' ? {color: 'rgba(0, 0, 0, 0.5)'} : null}
                text={"Ачивки"}
                icon={<StarBorderOutlinedIcon/>}
            />

            {isLogin
                ? <>
                    <ItemBar
                        path={"/training"}
                        text={"Тренировка"}
                        icon={<FitnessCenterOutlinedIcon/>}
                    />

                    <ItemBar
                        path={"/notifications"}
                        text={"Уведомления"}
                        icon={<NotificationsNoneOutlinedIcon/>}
                    />

                    <ItemBar
                        path={"/friends"}
                        style={{marginBottom: '16px'}}
                        text={"Друзья"}
                        icon={<GroupOutlinedIcon/>}
                    />
                </>
                : null
            }

            <hr style={theme === 'black' ? {borderColor: 'rgba(255,255,255,0.12)'} : {borderColor: 'rgba(0,0,0,0.1)'}}/>

            {isLogin
                ? <ItemBar
                    isButton={true}
                    path={"/privacy"}
                    style={!isLogin ? {marginTop: '14px'} : null}
                    text={"Приватность"}
                    icon={<LockOutlinedIcon/>}
                />
                : null
            }

            <ItemBar
                isButton={true}
                onClick={handleOpenTheme}
                text={"Тема приложения"}
                style={{marginTop: '14px'}}
                icon={<PaletteOutlinedIcon/>}
            />

            <ModalOnTheme open={open} onChangeBackground={onChangeBackground} theme={theme} onClose={handleCloseTheme}/>

            <ItemBar
                isButton={true}
                onClick={() => LanguageMenu()}
                text={"Язык"}
                icon={<LanguageOutlinedIcon/>}
            />

            {isLogin
                ? <ItemBar
                    isButton={true}
                    path={"/logout"}
                    text={"Выйти из аккаунта"}
                    icon={<ExitToAppOutlinedIcon/>}
                />
                : null
            }
        </div>
    );
};

export default LeftBar;
