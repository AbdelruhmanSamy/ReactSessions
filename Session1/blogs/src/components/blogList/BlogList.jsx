import React from 'react'
import BlogItem from '../blogItem/BlogItem.jsx';
import Styles from "./styles.module.css"
function BlogList() {

    const blogPosts = [
        {
            title: "Understanding JavaScript Closures",
            writer: "Jane Doe",
            body: "A closure is a function that remembers its outer variables and can access them..."
        },
        {
            title: "The Basics of React Hooks",
            writer: "John Smith",
            body: "React Hooks are functions that let you use state and other React features in function components..."
        },
        {
            title: "Getting Started with Next.js",
            writer: "Alice Johnson",
            body: "Next.js is a powerful framework for building server-rendered React applications..."
        },
        {
            title: "Exploring Async/Await in JavaScript",
            writer: "Bob Brown",
            body: "Async/Await is a syntactic sugar built on top of Promises, making asynchronous code easier to write and read..."
        }
    ];
    
    
    return (
        <div className={Styles.bloglist}>
          {  
            blogPosts.map((item ,  index)=><BlogItem {...item} key={index}/>)
         }        
        </div>
    )
}

export default BlogList
