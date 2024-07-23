import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Longread from './components/Longread';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Cards />
      <Longread />
      <Footer />
    </main>
  );
}

export default App;