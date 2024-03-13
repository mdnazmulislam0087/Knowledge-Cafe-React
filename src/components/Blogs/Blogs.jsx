import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then (data => setBlogs(data))
    },[])
    



    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => 
                    <Blog 
                    key={blog.id
                    } blog={blog}
                    handleAddToBookmarks = {handleAddToBookmarks}
                    handleReadingTime = {handleReadingTime}
                    ></Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    blogs: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func
}
export default Blogs;