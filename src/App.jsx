import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SectionCategories from './Components/SectionCategories';
import TopLine from './Components/TopLine';
import SectionBest from './Components/SectionBest';
import SectionAllProducts from './Components/SectionAllProducts';

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
      </header>
    </div>
  );
}

export default App;
