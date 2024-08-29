import "./navbar.css"
import axios from 'axios';

const Navbar = ({posts,setPosts}) => {

    const addPost = async () => {
        const new_post = {
            id: props.posts.length + 1,
            title: "New Post",
            body: "New Post Body"
        }
        try {
            // TODO : Add post request using axios to https://jsonplaceholder.typicode.com/posts and set the body to new_post
            // TODO : Add the new post to the posts array using setPosts that is passed in props 
            // and set the new array of setPosts to be the posts array and the new post(hint : res.data,...props.posts)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar">
            
            <div id="logo" >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Freact%2Flogo-react-1024.png&f=1&nofb=1&ipt=7214a431bfb13e49842c502d3fec5b8e89d3c83e6d285c9eb146bac546229832&ipo=images" alt="W3Schools.com" width="100"/>
            </div>
            
            <ul id="right-content">
                <button onClick={addPost} className="add-post">
                    Add Post
                </button>
            </ul>
    
        </nav>
    );
}

export default Navbar;