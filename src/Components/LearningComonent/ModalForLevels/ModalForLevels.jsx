import React, {useLayoutEffect} from "react";
import {Modal, Backdrop} from "@material-ui/core";


const ModalOnTheme = props => {
    let {theme} = props;
    const [setValue] = React.useState(theme);
    // debugger

    useLayoutEffect(() => {
        setValue(theme)
    }, [theme]);


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
                        asdasdas
                    </h2>
                </div>
            </Modal>
        </div>
    );
};

export default ModalOnTheme;