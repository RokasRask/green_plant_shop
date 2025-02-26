import '../Components/ComponentStyles/HotCardList.css'
import PlantCard from './PlantCard'

export default function HotCardList({ allProducts, rating }) {
    
    const filteredProducts = allProducts.filter((product) => product.rating === rating);
    
    return (
        <div className="hotCard-list">
            {filteredProducts.map(card => (
                <PlantCard
                    key={card.id}
                    plantid={card.id}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    price={card.price}
                    showDiscount={false}
                    discount={card.discount}
                />
            ))}
        </div>
    )
}