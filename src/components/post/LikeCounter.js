import React, { useState } from 'react';

export default  function LikeCounter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount -1 );
        
return (
        <div className='voting'>   
            <button className='votingButton' onClick={increment}>
                <div className='arrow upArrow'></div>
            </button>
            <div className='count'>{count}</div>
            <button className='votingButton' onClick={decrement}>
                <div className='arrow downArrow'></div>
            </button>
            
        </div>
    )
}