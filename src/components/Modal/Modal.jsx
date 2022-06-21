import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
    return (
        <div className={visible ? classes.modal + ' ' + classes.modal_active : classes.modal} onClick={() => setVisible(false)}>
            <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;