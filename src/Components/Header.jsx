import './ComponentStyles/Header.css';
import headerLogo from '../Images/Logo.svg';
import SearchLogo from '../Images/Search.svg';
import ShopIcon from '../Images/ShopIcon.svg';

export default function Header() {
    return (
        <div className='header-bg'>
            <div className='wrapper header'>
                <a href="#">
                    <img src={headerLogo} alt="Logo" />
                </a>
                <div className='header-links'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
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