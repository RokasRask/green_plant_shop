import CategoriesList from "./CategoriesList";
import Title from "./Title";
import './ComponentStyles/SectionCategories.css';


export default function SectionCategories() {
    return (
        <div className="wrapper categories">
            <Title text1='Shop' text2='by Category' showLink={false} />
            <CategoriesList />
        </div>
    )
}