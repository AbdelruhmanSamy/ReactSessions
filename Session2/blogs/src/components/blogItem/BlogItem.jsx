import React, { useContext } from 'react'
import Styles from "./styles.module.css"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';

function BlogItem(props) {
        
    return (
        <Link  to={`/blogs/${props.id}`}>
            <div className={Styles.blog}>
                <h1>{props.title}</h1>
                <p>Written by: {props.writer}</p>
            </div>
        </Link>
    )
}

export default BlogItem
