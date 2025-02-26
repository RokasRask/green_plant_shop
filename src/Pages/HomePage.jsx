import Hero from "../Components/Hero";
import SectionCategories from "../Components/SectionCategories";
import SectionBest from "../Components/SectionBest";
import SectionAllProducts from "../Components/SectionAllProducts";
import SectionTestimonials from "../Components/SectionTestimonials";

export default function HomePage() {
    return (
        <>
            <Hero />
            <SectionCategories />
            <SectionBest />
            <SectionAllProducts />
            <SectionTestimonials />
        </>
    )
}
