import PostBox from './PostBox'
import { v4 as uuidv4 } from 'uuid';

export default function PostBoxContainer(props) {
    let content;

    if(props.data) {
        let comments = props.comments
        content = props.data.data.children.map(post =>(
            <PostBox data={post.data} id={uuidv4()} key={uuidv4()} comments={comments} />
        ))
    }
    return (
        <main>
            {content}
        </main>
    )
}