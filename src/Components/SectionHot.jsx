import Title from "./Title";
import '../Components/ComponentStyles/SectionHot.css';
import HotCardList from "./HotCardList";

export default function SectionHot({ allProducts }) {

    console.log(allProducts);
    return (
        <div className="light-bg">
            <div className="wrapper hot-section">
                <Title text1="Hottest " text2="Plants" showLink={true} />
                <HotCardList allProducts={allProducts} rating={5} />
            </div>
        </div>
    )
}