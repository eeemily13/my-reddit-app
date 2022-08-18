import React, { useState, useEffect } from 'react';



export const LikeCounter = ({
    score,
    ups,
    downs,
    subreddit,
}) => {
    const [count, setCount] = useState(null);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount -1 );
    
    useEffect(() => {
        async function fetchScoreInfo() {
        try { 
            const response = await fetch(
                `https://www.reddit.com`
            );
            if(response.ok){
                const jsonResponse = await response.json();
                const scoreInfo = jsonResponse.data;
                return scoreInfo;
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchScoreInfo();
}, []);
return (
        <div className='voting'>   
            <button className='votingButton' onClick={increment}>
                <img src='https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-up-arrow-icon-png-image_956434.jpg' alt='up-arrow'/>
                
            </button>
            <p>{ups}</p>
            <div className='count'>{count}{score}</div>
            <p>{downs}</p>
            <button className='votingButton' onClick={decrement}>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX19fUAAAD4+Pj9/f1AQEB2dnZQUFD7+/uSkpIGBgbz8/NhYWGGhoZUVFSMjIxkZGRcXFxZWVmbm5vc3Ny2trbm5uYsLCx/f3/Pz8+jo6PExMQ6OjrHx8eurq5ra2skJCQUFBTb1Br+AAADh0lEQVR4nO2c63LaMBBGbSlByISEe2h6Sd7/KStgSm0qjGxptSv3O7+TQWd2/UlrGFUVAAAAAAAAAAAAAAAAAAD+a5QZjuJedDiqMsdv86FsPppiHNV2Vo/h8GGqIiTNtq7tKMV6pxvu1QfxfZzeiX0JNTQ/xgvWr4Z7+QGY+Wg/W89KMNTPETV8KqFLYQhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlU7Kh0UFEGYZ9BMn9fI1pfv6aBbD8jDD8WoZ8xGKzJ7gxyxwPESsPJPwiu11yRbUNXsDI+/YG/O/pr5Ir6lXEuin4Snz/oCthTGnSY+udTmu4E2f4ktxQGu9pH0R15Bb6h03qqMmwVwzAPTLbxLu+kdamz2kfwyrq0k4KVqn9HHouJk5tvSA5oet5HXdgSccb0Y3KWkqjLsiujNavAmpo6zXhEOkU+RuVImRuFHlZE99qzpyoVCnaUeStIl3ItBTZEtWeBB3kN9OzVdG6kMnzLo5NcZXpXaPiatS3PH5nWBRzhAyr4iKjnqPJrGiztuiFzAc4qmnioWIuVorjK5tsk4bNtk14FPM0aq6N3qOYJ254WvSqSF1Dm3ubuFWkj5u8G71HkbpRaSf6IEXKKp7eyfD/doFUkWubaEM6aeQ/qvkhU+Q4qvkhUuTdJroQKHJME30QHOAWAlK0TfJE5Tyq+Uk6afBNE30k/fKN+6jmJ2HcyBRMNmlYAWfReySKG3khc6VJorjm1uglWlHGNNFHtCL994OxRCaqrKOanyhFOdNEHxGNKneb6DJaUdK41I9+GSVI/SuLlOj3EYLLggTPVRx2gLP1slHkP0FIyeBGdYIllbAarFhWi15wz2Joo9p6VqDgoLgpU3CA4ox7paMJSlRb5DP4h6C4cYLlGoYolnSS8fFQsdSQ+cuDuCk3ZK6o3iouuZeXBHNf0R3VuFeXgvtVLHmb6OLdF+1UKnjGW8Xypok+PIla/jbR5WbScNPEhFr0wk0Vp1bBE51ncTop2uacqNZOLUXbXN+jrieVom307sn5HTZlvVQbhNL749YQ3LwiCKWm2qBXptugAAAAAAAAAAAAAAAAAJj5DWeMRsMJJMPjAAAAAElFTkSuQmCC' alt='down-arrow'/>
            </button>
            
        </div>
    )

}