import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, isLoading } = useFetch(`https://blogging-point-server.onrender.com/blogs/${id}`)



    const handleClick = () => {
        fetch(`https://blogging-point-server.onrender.com/blogs/${data.id}`, {
            method: 'DELETE'
        }).then(() => { navigate('/'); })
    }

    return (<div className="blog-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (<article>
            <h2>{data.title}</h2>
            <p>Written by {data.author}</p>
            <div className="blog-body">{data.body}</div>
            <button onClick={handleClick}>Delete Blog</button>
        </article>

        )}
    </div>);
}

export default BlogDetails;