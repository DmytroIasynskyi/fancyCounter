import React from 'react';

function CountButton({ handleClick, children, isDisabled = false }) {
    return (
        <button className={'count-btn'} onClick={handleClick} disabled={isDisabled}>
            {children}
        </button>
    );
}

export default CountButton;