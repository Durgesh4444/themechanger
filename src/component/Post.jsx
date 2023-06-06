import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/themecontext'
const Post = () => {
  const {theme, handleclick}= useContext(ThemeContext)
  return (
    <div>
        <h4>My Post with {theme}</h4>
        <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"}`} onClick={handleclick}>{theme === "dark"? "light": "dark"}</button>
    </div>
  )
}

export default Post;