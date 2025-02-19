import { useEffect, useState } from 'react';
import '../Components/ComponentStyles/SectionTestimonials.css';
import TestimonialsList from './TestimonialsList';

export default function SectionHot({ }) {

    const [testimonials, setTestimonials] = useState([]);
    
        useEffect(() => {
            const fetchAllTestimonials = async () => {
                try {
                    const response = await fetch('https://gist.githubusercontent.com/RokasRask/bb900067f94ae7b17885a1ea8cd644b1/raw/527a8d77b822227a4c7009c1611eff504d0e0d40/testimonials.json');
                    const data = await response.json();
                    console.log(data);
    
                    const allTestimonialsWithImages = await Promise.all(data.map(async (testimonial) => {
                        let imagePath;
                        try {
                            imagePath = await import(`../Images/clients/${testimonial.img}`);
                        }
                        catch (error) {
                            imagePath = await import(`../Images/clients/clear.jpg`);
                        }
    
                        return {
                            ...testimonial,
                            imageSrc: imagePath.default,
                        };
                    }));
                    console.log(allTestimonialsWithImages);
                    setTestimonials(allTestimonialsWithImages);
                } catch (error) {
                    console.error('Klaida gaunant visus atsiliepimus', error);
                }
            };
            fetchAllTestimonials();
        }, []);

    return (
        <div className="light-bg">
            <div className="wrapper testimonials-section">
                <h2 className='test-title'>Testimonials</h2>
                <p className='test-text'>Plant parents love us</p>
                <TestimonialsList testimonials={testimonials} />
            </div>
        </div>
    )
}