import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Product from './components/Product/Product'
import ProductDetail from './components/Product/ProductDetail'
import Checkout from './components/Checkout/CheckOut'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </>
  )
}

export default App
