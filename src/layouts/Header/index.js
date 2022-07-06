import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
        <nav>
            <Link to="/">About</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/songs">Songs</Link>
        </nav>
        </>
    )
}

export default Header;
