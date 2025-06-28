import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Catalog from './pages/Catalog';

function App() {
  return (
    <>
      <Navbar />
      <Catalog />
      <About/>
      <Footer />

    </>
  )
}

export default App
