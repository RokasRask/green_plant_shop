import './ComponentStyles/Header.css';
import headerLogo from '../Images/Logo.svg';
import SearchLogo from '../Images/Search.svg';
import ShopIcon from '../Images/ShopIcon.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-bg'>
            <div className='wrapper header'>
                <a href="#">
                    <img src={headerLogo} alt="Logo" />
                </a>
                <div className='header-links'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="products">Products</NavLink>
                    <NavLink to="about">About us</NavLink>
                    <NavLink to="contact">Contact us</NavLink>
                </div>
                <div className='header-right'>
                    <input type="text" />
                    <img src={SearchLogo} alt="Search icon" />
                    <a href="#" className='shopcart'><img src={ShopIcon} alt="Shop icon" />3</a>
                </div>
            </div>
        </div>
    );
}