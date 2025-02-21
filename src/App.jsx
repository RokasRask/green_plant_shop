import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SectionCategories from './Components/SectionCategories';
import TopLine from './Components/TopLine';
import SectionBest from './Components/SectionBest';
import SectionAllProducts from './Components/SectionAllProducts';
import SectionTestimonials from './Components/SectionTestimonials';
import SectionFooter from './Components/SectionFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopLine />
        <Header />
        <Hero />
        <SectionCategories />
        <SectionBest />
        <SectionAllProducts />
        <SectionTestimonials />
        <SectionFooter />
      </header>
    </div>
  );
}

export default App;
