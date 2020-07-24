import React, {useLayoutEffect, useState} from "react";
import {useCookies} from 'react-cookie';
import s from './ModalOnTheme.module.css';
import CloseIcon from '@material-ui/icons/Close';
import {Modal, Backdrop, Fade} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";

const ModalOnTheme = props => {

    let {onClose, theme, onChangeBackground} = props;
    const [value, setValue] = React.useState(theme);
    const [cookie, setCookie] = useCookies(['THEME']);
    // debugger

    useLayoutEffect(() => {
        setValue(theme)
    }, [theme]);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setCookie('THEME', value, {path: '/'});
        onChangeBackground(value);
        onClose()
    };

    const isThemeWhite = () => {
        if (theme === 'white') {
            return {color: 'rgba(0, 0, 0, 0.87)'}
        } else {
            return {color: 'white'}
        }
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                {...props}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={props.modalState}>
                    <div style={theme === 'white' ? {background: '#FDFDFD'} : null} className={s.modalMain}>
                        <h2 className={s.modalTitle}>
                            <CloseIcon className={s.closeIcon}
                                       style={isThemeWhite()}
                                       onClick={() => onClose()}/>
                            <span style={isThemeWhite()}>Тема приложения</span>
                            <CloseIcon style={{color: 'transparent'}}/>
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <FormControl className={s.formControlClass} component="fieldset">
                                <RadioGroup value={value} onChange={handleChange}>
                                    <FormControlLabel value="black"
                                                      labelPlacement="start"
                                                      style={isThemeWhite()}
                                                      control={<Radio color="primary" style={{color: '#1A73E8'}}/>}
                                                      className={s.formControlLabel}
                                                      label="Тёмная"/>
                                    <FormControlLabel value="white"
                                                      labelPlacement="start"
                                                      style={isThemeWhite()}
                                                      control={<Radio color="primary" style={{color: '#1A73E8'}}/>}
                                                      className={s.formControlLabel}
                                                      label="Светлая"/>
                                    <button type="submit" className={s.btnSubmit}>
                                        Применить
                                    </button>
                                </RadioGroup>
                            </FormControl>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalOnTheme;