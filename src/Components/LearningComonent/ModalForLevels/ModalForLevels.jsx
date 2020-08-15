import React, {useLayoutEffect, useState} from "react";
import {Modal, Backdrop} from "@material-ui/core";
import axios from 'axios';


const ModalOnTheme = props => {
    let {theme, chapter_number} = props;
    const [
        value, setValue
    ] = React.useState(theme);
    // debugger

    useLayoutEffect(() => {
        setValue(theme)
    }, [theme]);

    axios.get('http://37.53.93.223:5037/' + chapter_number)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        });


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={props.open}
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
                <div>
                    <h2>

                    </h2>
                </div>
            </Modal>
        </div>
    );
};

export default ModalOnTheme;