import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import propTypes from 'prop-types'
const Blogs = ({handeladdbookMark}) => {
   const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl mb-4 mt-4">Blogs:{blogs.length}</h1>
            {
               blogs.map(blog =>
               <Blog key={blog.id}
               handeladdbookMark ={handeladdbookMark} blog={blog}>
            </Blog>)
            }

        </div>
    );
};
Blogs.propTypes ={
    handeladdbookMark:propTypes.func.isRequired
}

export default Blogs;