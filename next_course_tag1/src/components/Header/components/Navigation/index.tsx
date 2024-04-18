import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <nav>
            <Link href="/" className='navItem'>Home</Link>
            <Link href="/aboutus" className='navItem'>About Us</Link>
            <Link href="/users" className='navItem'>Users</Link>
            <Link href="/blog" className='navItem'>Blog</Link>
        </nav>
    )
}

export default Navigation
