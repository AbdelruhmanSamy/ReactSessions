import React from 'react'
import BlogList from '../../components/blogList/BlogList'
function Home() {

    const styles = {
       margin: "5%"
    }

    return (
        <div style={styles}>
            <h1>Today's Blogs</h1>
            <BlogList/>   
        </div>
    )
}

export default Home
