import { Link } from "react-router-dom";
import icon from "../../img/icon.svg";
import logo from "../../img/logo.png";
import s from './header.module.css';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

function Header(){
    const [isMenuOpen, setMenuOpen] = useState(false);
    const basket = useSelector(store => store.basket);
    const basketLength = basket.length;

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return(
        <div className={`${s.header}`}>
            <Link to="/">
                <img className={`${s.logo}`} src={logo} alt="Logo"/>
            </Link>
            <div className={`${s.navBar}`}>
                <Link className={`${s.navBarElem}`} to="/">
                    <p className={`${s.navBarText}`}>Home</p>
                </Link>
                <Link className={`${s.navBarElem}`} to="/categories/all">
                    <p className={`${s.navBarText}`}>Categories</p>
                </Link>
                <Link className={`${s.navBarElem}`} to="/products/all">
                    <p className={`${s.navBarText}`}>Products</p>
                </Link>
                <Link className={`${s.navBarElem}`} to="/products/sales">
                    <p className={`${s.navBarText}`}>Sales</p>
                </Link>
            </div>
            <div className={s.burger} onClick={toggleMenu}>
                <div className={`${s.bar} ${isMenuOpen ? s.open : ''}`}></div>
                <div className={`${s.bar} ${isMenuOpen ? s.open : ''}`}></div>
                <div className={`${s.bar} ${isMenuOpen ? s.open : ''}`}></div>
            </div>
            <Link to="/shopping_cart">
                {basketLength > 0 && <p className={`${s.countBasket}`}>{basket.reduce((total, item) => total + item.count , 0)}</p>}
                <img className={`${s.icon}`} src={icon} alt="Shopping Cart"/>
            </Link>
        </div>
    )
}

export default Header
