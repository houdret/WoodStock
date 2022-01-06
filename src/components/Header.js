import React from 'react';
import Nav from './Nav';
import '../styles/Header.css'
const Header = () => {
    return (
        <div className="header">
           <Nav />           
           <img src="../media/banniere.png" alt="banniere" id='img'/> 
           <img src="../media/wood-stock.png" alt="wood-stock" id='wood-stock'/> 
        </div>
    )
}

export default Header