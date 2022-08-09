import React, { useState } from 'react';

export default  function LikeCounter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount -1 );
        
return (
        <section className='likeContainer'>   
            <button className='increaseLike' onClick={increment}>Like</button>
            <p className='count'>{count}</p>
            <button className='decreaseLike' onClick={decrement}>Dislike</button>
            
        </section>
    )
}
