import React, {useLayoutEffect, useState} from "react"
import {Modal, Backdrop} from "@material-ui/core"
import s from './ModalForLevels.module.css'


const ModalOnTheme = props => {
    let {theme, chapterdata} = props;
    const [value, setValue] = useState(null);

    /** Use for Modal theme of
     * @MaterialUI */
    useLayoutEffect(() => {
        setValue(value);
    });
    /** end */

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
                <div className={s.asdasd}>
                    <h2>

                    </h2>
                </div>
            </Modal>
        </div>
    );
};

export default ModalOnTheme;