import './ComponentStyles/Category.css';

export default function Category({ title, imageSrc }) {

    return (
        <div className='card'>
            <img className='cardImg' src={imageSrc} alt={title} />
            <h3 className='cardTitle'>{title}</h3>
        </div>
    )
}