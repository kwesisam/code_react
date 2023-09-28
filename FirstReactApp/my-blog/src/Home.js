import { useState } from "react";
const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body:"lorem ispsum...", author: "mario", id:1},
        {title: "Welcome party!", body:"lorem ispsum...", author: "yoshi", id:2},
        {title: "Web dev top tips", body:"lorem ispsum...", author: "mario", id:3}
    
    ]);
    const [likes, setLikes] = useState();

    return (
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Writen by {blog.author}</p>    
                 </div>
            ))}
        </div>
      );
}
 
export default Home ;