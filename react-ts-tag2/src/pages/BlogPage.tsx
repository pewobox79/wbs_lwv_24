import BlogSection from "../components/BlogSection"
import BlogForm from "../components/Forms/BlogForm"
import { useState } from "react"

const BlogPage = () => {
    const [open, setOpen]=useState(false);

    return <div style={{width: "100%", textAlign: "center"}}>
        <h3>Blogpage</h3>
        {!open ? <button onClick={()=> setOpen(true)}>add new article</button>: <BlogForm setOpen={setOpen}/>}
        <BlogSection/>

    </div>

}

export default BlogPage
