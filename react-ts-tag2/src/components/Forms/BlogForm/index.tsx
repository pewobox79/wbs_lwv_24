import React, { useState } from 'react'

const INIT_VALUES = {
    title: "",
    body: ""
}
const BlogForm = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [newArticle, setNewArticle] = useState(INIT_VALUES)

    function handleChange(event: { target: { value: string, name: string } }) {
        setNewArticle({ ...newArticle, [event.target.name]: event.target.value })
    }

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newArticle),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => alert(JSON.stringify({ message: "new article has been send", data: json })));
        setNewArticle(INIT_VALUES)
        setOpen(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label><br />
            <input id='title' type="text" name="title" value={newArticle.title} onChange={handleChange} /><br />
            <label htmlFor='body'>Body</label><br />
            <textarea id='body' name='body' rows={5} onChange={handleChange} value={newArticle.body} /><br />
            <button type='submit'>Send new Article</button>
        </form>
    )
}

export default BlogForm
