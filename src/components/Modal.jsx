import React from 'react';

const Modal = ({children, visible, setVisible}) => {
    return (
        <div className={visible ? 'modal _active' : 'modal'} onClick={() => setVisible(false)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <h3>Введите ваши данные</h3>
                {children}
            </div>
        </div>
    );
};

export default Modal;