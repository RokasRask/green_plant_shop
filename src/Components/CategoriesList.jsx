import { useEffect, useState } from 'react';
import './ComponentStyles/CategoriesList.css';
import Category from './Category';

export default function CategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/RokasRask/61f406a486016db99c9eca7a9f6ad40d/raw/2e34a79233a645346978e1307ae30e5e2ef330bd/shop.json');
                const data = await response.json();
                    console.log(data);
               
                const categoriesWithImages = await Promise.all(data.map(async (category) => {
                        const imagePath = await
                        import(`../Images/categories/${category.fileName}`);
                        return {
                            ... category,
                            imageSrc: imagePath.default,
                        };
                    }));
                setCategories(categoriesWithImages);
            } catch (error){
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchCategories();
    }, []);



    return (
        <div className='categories-list'>
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        imageSrc={category.imageSrc}
                        title={category.title}
                    />
                ))
            }

        </div>
    )
}