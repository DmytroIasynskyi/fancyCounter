import React, {useState} from 'react';
import ResetButton from "./ResetButton.jsx";
import CountButton from "./CountButton.jsx";
import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

function Card() {
    const  [count, setCount] = useState(0);
    const isLimitReached = count === 5;

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        if(count !== 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className={`card ${isLimitReached ? 'card--limit' : ''}`}>
            <h1 className={'title'}>{`${isLimitReached ? 'Limit Reached' : 'Fancy Counter'}`}</h1>
            <p className={'count'}>{count}</p>
            <ResetButton setCount={setCount}/>
            <div className={'button-container'}>
                <CountButton isDisabled={isLimitReached} handleClick={decreaseCount}>
                    <MinusIcon className={'count-btn-icon'}/>
                </CountButton>
                <CountButton isDisabled={isLimitReached} handleClick={increaseCount}>
                    <PlusIcon className={'count-btn-icon'}/>
                </CountButton>
            </div>
        </div>
    );
}

export default Card;