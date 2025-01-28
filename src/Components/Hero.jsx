import './ComponentStyles/Hero.css';
import leaves1 from '../Images/leaves1.png';
import leaves2 from '../Images/leaves2.png';

export default function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='wrapper hero-card'>
                    <h1>Plants are our Passion</h1>
                    <p>Even if you don’t have a green thumb, you can still have a green home.</p>
                    <button className='wrapper'>GET PLANTING</button>
                </div>
                <img src={leaves1} alt="tree leaves" />
                <img src={leaves2} alt="tree leaves" />
            </div>
            <div className='green-border'></div>
        </>
    )
}