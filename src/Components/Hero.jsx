import './ComponentStyles/Hero.css';
import heroBg from '../Images/HeroBG.png';

export default function Hero() {
    return (
        <div>
            <div className='wrapper'>
                <h1>Plants are our Passion</h1>
                <p>Even if you don’t have a green thumb, you can still have a green home.</p>
                <button>GET PLANTING</button>
            </div>
        </div>
    )
}