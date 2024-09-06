import React, {useContext } from 'react'
import BlogItem from '../blogItem/BlogItem.jsx';
import Styles from "./styles.module.css"
import { blogPosts } from '../../assets/blogPosts.js';
import { ThemeContext } from '../../App.jsx';


function BlogList() {
    
    const themeObj = useContext(ThemeContext)
    const theme = themeObj.theme
    const setTheme = themeObj.setTheme

  
    const buttonColor = theme === "dark"? "darkBlue" : "lightBlue"
    console.log("buttonColor = " , buttonColor)

    return (

          <div className={Styles.bloglist}>
            {  
              blogPosts.map((item ,  index)=><BlogItem {...item} key={item.id}/>)
            }    
            <div className={Styles.innerDiv}>
              <button onClick={()=>setTheme(theme == 'light' ? 'dark' : 'light')}>Change Theme</button>
              <button style={{backgroundColor: buttonColor }}>ThemeButton</button>    
            </div>    
          </div>
    )
}

export default BlogList
