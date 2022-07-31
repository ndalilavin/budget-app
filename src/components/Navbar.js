import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return(
        <nav className='navbar bg-danger'>
            <div className='container-fluid'>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">BudgetTracker</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News/Tips</Link>
                    </li>
                </ul>  
            </div>
        </nav>
    )

}

export default Navbar;