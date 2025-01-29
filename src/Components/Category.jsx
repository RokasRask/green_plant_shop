import './ComponentStyles/Category.css';

export default function Category({ cardTitle, cardImg }) {

    const path = '../Images/';
    const imgSrc = `${path}${cardImg}`

    return (
        <div className='card'>
            <img className='cardImg' src={imgSrc} alt="" />
            <h3 className='cardTitle'>{cardTitle}</h3>
        </div>
    )
}