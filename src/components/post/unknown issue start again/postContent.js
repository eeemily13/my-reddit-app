import convertTime from './timeConversion';
import Interactions from './Interactions';

export default function PostContent(props) {
    const postDate = convertTime(props.data.created_utc);

    return (
        <div className={props.className}>
            <p>
                <time><em>{postDate}</em></time>
            </p>
            <header className='postTitle'>
                <h2>{props.data.title}</h2>
            </header>
            <Interactions data={props.data} id={props.id} comments={props.comments}/>
        </div>
    )
}