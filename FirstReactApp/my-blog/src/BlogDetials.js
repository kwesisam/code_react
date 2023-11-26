import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";
const BlogDetials = () => {
    const {id} = useParams();
    const {data : blog, IsPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const deleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method : 'DELETE'
        }).then(() => {

            history.push('/');
        })
    }


    return ( 
        <div className="blog-details" >
            {IsPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <div>{blog.title}</div>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteBlog}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetials;