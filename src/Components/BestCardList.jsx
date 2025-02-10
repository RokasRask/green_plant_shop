import { useEffect, useState } from 'react';
import './ComponentStyles/BestCardList.css';
import BestCard from './BestCard';

export default function BestCardList({ title, imageSrc }) {

    const [bestCards, setBestCards] = useState([]);

    useEffect(_ => {
        const fetchBestCards = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/RokasRask/8f882670ab375705eb6609cd07e17b6f/raw/c3b0fd4c126d7a117a641b8d08d7045001f03ef3/BestTags.json');
                const data = await response.json();
                    console.log(data);
               
                const bestCardsWithImages = await Promise.all(data.map(async (bestCard) => {
                        const imagePath = await
                        import(`../Images/best-selling/${bestCard.fileName}`);
                        return {
                            ... bestCard,
                            imageSrc: imagePath.default,
                        };
                    }));
                setBestCards(bestCardsWithImages);
            } catch (error){
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchBestCards();
    }, []);



    return (
        <div className='best-cards-list'>
            {
                bestCards.map(card => (
                    <BestCard 
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title={card.title}
                    />
                ))
            }

        </div>
    )
}