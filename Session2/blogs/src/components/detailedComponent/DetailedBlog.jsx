import React from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../../assets/blogPosts';
import "./styles.css"
function DetailedBlog() {
    const params = useParams();
    const id = params.id
    console.log(id);
    const blog = blogPosts.find((item)=> item.id === Number(id))
    
    console.log(blog)
    return (
        <div className='detailed-item'>
            <h1>{blog.title}</h1>
            <h3>{blog.writer}</h3>
            <p>{blog.body}</p>
        </div>
    )
}

export default DetailedBlog
