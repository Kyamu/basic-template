import React from 'react';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Dojo Blog</h1>
            <div className='link'>
                <a href='#'>Home</a>
                <a href='#'>Contact</a>
                <a href='#'>Blog</a>
                <a href='#'>Project</a>
            </div>
        </nav>
    )
}

export default Navbar;