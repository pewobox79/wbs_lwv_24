import { Link } from "react-router-dom"

const BlogItem = ({ title, id }: { title: string, id:string }) => {
    return (
        <div style={{ width: "50%", margin: "5px auto", display: "flex", borderRadius: "10px", border: "1px solid green", justifyContent: "space-between" }}>
            <h4 style={{ padding: "0 5px" }}>{title}</h4>

            <Link to={`/blog/${id}`}
                style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px", minHeight: "100px",backgroundColor: "lightblue", display:"flex", justifyContent: "center", alignItems: "center" }}>
                more
            </Link>
        </div>
    )
}

export default BlogItem
