import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
return (
    <div className='container justify-content-center mt-2'>
        <Link className='btn btn-warning mx-2 w-25' to="">Home</Link>
        <Link className='btn btn-warning mx-2 w-25' to="About">About</Link>
    </div>
)
}

export default Menu