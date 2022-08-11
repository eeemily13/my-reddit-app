import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectUrl } from '../app/sourceSlice';

export default function LoadFail () {
    const error = useSelector(state => state.source.error)
    const dispatch = useDispatch();
    const url = useSelector(selectUrl);

    let errorMessage;

    if (error) {
        errorMessage = error;
    } else {
        errorMessage = 'Sorry something gone wrong >.<'
    }

    return (
        <div className='post-box-loading'>
            <div className='loader'>
                <p className='load-text'>{errorMessage}</p>
                <button type='button' onClick={() => dispatch(fetchData(url))}>Reload</button>
                <figure>
                    <img className='fail-img' alt='dead' src="puppy1"/>
                </figure>
                <button type='button' onClick={() => window.location.reload()}>Reload Page</button>
            </div>
        </div>
    )
}