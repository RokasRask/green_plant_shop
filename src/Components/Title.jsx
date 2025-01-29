import './ComponentStyles/Title.css';
export default function Title({ text1, text2 }) {
    return (
        <h2 className='sectionTitle'><span className='greenTitle'>{text1}</span><span>{text2}</span></h2>
    )
}