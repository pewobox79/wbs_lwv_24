import Link from 'next/link'
import React from 'react'

const BlogItem = ({ title, id }: { title: string, id: string }) => {
    return (
        <div className="blogItem">
            {title}
            <Link href={`/blog/${id}`} className="detailsButton">
                More Details
                </Link>
        </div>
    )
}

export default BlogItem
