import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
        <nav className='navbar'>
            <h1 className="logo">Agami Student Management</h1>
            <ul className="nav-items">
                <Link to={'/'}> <li className="nav-item">Home</li> </Link>
                <Link to={'/'}> <li className="nav-item">Add Student</li> </Link>
                <Link to={'/students'}> <li className="nav-item">Students</li> </Link>
                <Link to={'/search'}> <li className="nav-item">Search</li> </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar