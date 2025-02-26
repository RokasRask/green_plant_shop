import './ComponentStyles/Hero.css';
import Button from './Button';

export default function Hero(){
    return(
        <>
            <div className="hero-bg">
                <div className="wrapper hero">
                    <div className='hero-mid'>
                        <h1 className='main-title'>Plants are our Passion</h1>
                        <p className='slogan'>Even if you don’t have a green thumb, you can still have a green home.</p>
                        <Button
                           className="white-btn" 
                        >
                            Get Planting
                        </Button>
                    </div>
                </div>
            </div>
            <div className='dark-line'></div>
        </>
    );

}