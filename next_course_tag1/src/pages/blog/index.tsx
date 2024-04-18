// server side rendering mit Blog posts
// SSR für pages router => getStaticProps

import BlogItem from "@/components/Blog/BlogItem"

export const getStaticProps = async () => {

    try {
        const res = await fetch(' https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        return {
            props: {
                posts: data
            }
        }

    } catch (err) {
        console.log("error", err)
    }


}

//BLOG ist die eigentliche Komponente und bekommt von dem getStaticProps den return
const Blog = ({ posts }: { posts: [] }) => {

    const ListOfPosts = posts.map((item:{title:string, id:string}) => {
        return <BlogItem
            key={item.id}
            title={item.title}
            id={item.id} />

    })

    return <>
    <h3>Blog</h3>
    {ListOfPosts}</>
}


// alternativer platz für funktion getSTaticProps ist nach der eigentlichen komponente => sieht man noch häufig

export default Blog
