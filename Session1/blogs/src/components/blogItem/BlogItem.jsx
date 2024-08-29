
import React from 'react'
import Styles from "./styles.module.css"
import { redirect } from 'react-router-dom';

function BlogItem(props) {
    console.log(props);
    return (
        <div className={Styles.blog} onClick={redirect("")}>
            <h1>{props.title}</h1>
            <p>Written by: {props.writer}</p>
        </div>
    )
}

export default BlogItem
