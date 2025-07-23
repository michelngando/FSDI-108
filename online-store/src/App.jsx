import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import GlobalProvider from './state/GlobalProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';



function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/catalog' element={<Catalog />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

//Before importing the BrowserRouter, Routes and Route, the extension first has to be installed: npm install -s react-router-dom
// The GlobalProvider variable wraps all the components to give them access to the context
