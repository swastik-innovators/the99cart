import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Background Elements */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default App;
