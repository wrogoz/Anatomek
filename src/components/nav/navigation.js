import React from 'react';
import { Link } from  'react-router-dom'
import './navigation.css'
const Navigation = () => {
    return (
        <ul id="navBox">
            <li> <Link to={`/`}> Start </Link> </li>
            <li> <Link to={`/systems`}> Systemy Ciała </Link> </li>
            <li> <Link to={`/organs`}> Organy </Link> </li>
            <li> <Link to={`/`}> Zmysły </Link> </li>
            <li> <Link to={`/`}> Oddaj nerkę </Link> </li>
        </ul>
    )
}

export default Navigation;