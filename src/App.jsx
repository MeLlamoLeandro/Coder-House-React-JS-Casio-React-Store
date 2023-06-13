import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import ScrollToTop from './helpers/scrollToTop';
import ItemSearchContainer from './components/ItemSearchContainer';

function App() {
  return (
    <div className='container-fluid'>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/search-results' element={<ItemSearchContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<div className='d-flex justify-content-center align-items-center vh-100'><h1 className='text-center'>404 NOT FOUND</h1></div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
