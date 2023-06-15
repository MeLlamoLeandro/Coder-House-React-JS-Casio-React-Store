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
import Checkout from './components/Checkout';
import Error404 from './components/Error404';

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
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
