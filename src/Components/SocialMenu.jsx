import './ComponentStyles/SocialMenu.css';
import fb from '../Images/social/facebook.svg';
import tube from '../Images/social/youtube.svg';
import tw from '../Images/social/twitter.svg';
import ig from '../Images/social/instagram.svg';
import lin from '../Images/social/linkedin.svg';

export default function SecondMenu() {

    return (
        <div className='wrapper social-menu'>
            <nav className='social-menu-links'>
                <a href="#"><img src={tube} alt="youtube icon" /></a>
                <a href="#"><img src={fb} alt="fb icon" /></a>
                <a href="#"><img src={tw} alt="twitter icon" /></a>
                <a href="#"><img src={ig} alt="instagram icon" /></a>
                <a href="#"><img src={lin} alt="linkedin icon" /></a>
            </nav>
        </div>
    )
}