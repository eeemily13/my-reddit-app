import { selectUrl } from "../app/sourceSlice";
import { useSelector } from "react-redux";
import PostBox from "./PostBox";
import LoadFail from './LoadFail';
import Comments from "./social/comment/Comments";



export default function SinglePostContainer(props) {
    const url = useSelector(selectUrl);
    let content;
    let comments;

    if (url === "https://www.reddit.com/r/dogs.json") {
        content  = (<LoadFail/>);
        comments= null;
    } else if (props.data) {
        content = (<PostBox data={props.data[0].data.children[0].data}/>)
        comments = (<Comments data={props.data[1].data}/>)
    }

    return (
        <main>
            {content}
            {comments}
        </main>
    )
}
