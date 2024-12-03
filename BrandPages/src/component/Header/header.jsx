import React from "react";

function Header(){
    return(
        <>
        <nav className="container">
            <div>
                <img src="./images/brand_logo.png" alt="brand_logo" />
            </div>
            <ul>
                <li ><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
             <button className="red">Login</button>
        </nav>
        </>
    )
}

export default Header;