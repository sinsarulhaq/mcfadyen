import './App.css';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Description />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
