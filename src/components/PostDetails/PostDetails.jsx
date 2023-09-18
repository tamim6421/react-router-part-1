
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate();
    const {postId} = useParams()
    const {id, title, body} = post

    console.log(postId)
    const handleGoBack =() =>{
        navigate(-1)
    }
    return (
        <div>
            <p> post load {id} </p>
            <p> {title} </p>
            <p> {body} </p>
            <button onClick={handleGoBack} >go back</button>
        </div>
    );
};

export default PostDetails;