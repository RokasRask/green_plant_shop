import './App.css';
import CategoriesList from './Components/CategoriesList';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SectionCategories from './Components/SectionCategories';
import Title from './Components/Title';
import TopLine from './Components/TopLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopLine />
        <Header />
        <Hero />
        <SectionCategories />
      </header>
    </div>
  );
}

export default App;
