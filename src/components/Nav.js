import React from 'react'
import '../styles/Nav.css';
const Nav = () => {
    return (
        <div className="nav">
            <img src="../media/menu.png"  id="menu" />
            <div className="navigation">
                <ul>
                    <li><img src="../media/wood.png" /></li>
                    <li><span>About</span></li>
                    <li><span>Furniture</span></li>
                    <li><span>Shop</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </div>            
        </div>
    )
}

export default Nav
