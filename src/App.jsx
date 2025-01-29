import './App.css';
import Category from './Components/Category';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Title from './Components/Title';
import TopLine from './Components/TopLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopLine />
        <Header />
        <Hero />
        <Title text1='Shop ' text2='by Category'/>
        <Category cardTitle='Bonsai' cardImg='Bonsai.svg' />
      </header>
    </div>
  );
}

export default App;
