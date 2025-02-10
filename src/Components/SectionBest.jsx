import './ComponentStyles/SectionBest.css';
import Title from './Title';
import BestCardList from './BestCardList';


export default function SectionCategories() {
    return (
        <div className="wrapper best-section">
            <Title text1='Best ' text2='selling' showLink={true} />
            <BestCardList />
        </div>
    )
}