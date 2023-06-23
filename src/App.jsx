import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginProvider } from './context/LoginContext';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemSearchContainer from './components/ItemSearchContainer';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Error404 from './components/Error404';
import Login from './components/Login';
import ScrollToTop from './helpers/scrollToTop';
import Register from './components/Register';


function App() {
  return (
    <div className='container-fluid'>
      <LoginProvider>
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
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
