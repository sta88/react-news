import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className='input' {...props}/>
    );
});

export default Input;