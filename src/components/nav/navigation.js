import React from 'react';
import { Link } from  'react-router-dom'
import './navigation.css'
const Navigation = (props) => {
    return (
        <ul id="navBox">
            <li>
                <Link to={`/`}>
                    Start
                        </Link>
            </li>
                    <li>Systemy Ciała</li>
                    <li>Organy</li>
                    <li>Zmysły</li>
                </ul>
    )
}

export default Navigation;