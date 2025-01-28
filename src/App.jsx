import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import TopLine from './Components/TopLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopLine />
        <Header />
        <Hero />
      </header>
    </div>
  );
}

export default App;
