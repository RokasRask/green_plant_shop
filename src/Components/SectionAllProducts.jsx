import { useState, useEffect } from "react"
import SectionHot from "./SectionHot";
import SectionDeals from "./SectionDeals";

export default function SectionAllProducts() {

    const [allProducts, setAllProducts] = useState([]);

    console.log(allProducts);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/RokasRask/bdc03ef24ce653d1a1a2630c210a00ed/raw/b845fd57727c30db02c77ea52dcca6a6b9adfe1e/plants.json');
                const data = await response.json();
                console.log(data);

                const allProductsWithImages = await Promise.all(data.map(async (product) => {
                    let imagePath;
                    try {
                        imagePath = await import(`../Images/plants-data/${product.fileName}`);
                    }
                    catch (error) {
                        imagePath = await import(`../Images/plants-data/empty.svg`);
                    }

                    return {
                        ...product,
                        imageSrc: imagePath.default,
                    };
                }));
                console.log(allProductsWithImages);
                setAllProducts(allProductsWithImages);
            } catch (error) {
                console.error('Klaida gaunant visas prekes', error);
            }
        };
        fetchAllProducts();
    }, []);

    return (
        <>
            <SectionHot allProducts={allProducts} />
            <SectionDeals allProducts={allProducts} />
        </>
    )
}
