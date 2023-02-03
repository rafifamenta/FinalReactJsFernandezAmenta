import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import { CartProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  function logOutSession() {
    toast('¡Gracias por tu visita!😊');
  }

  function logInSession(username) {
    toast(`Te damos la bienvenida ${username} 😊`);
  }

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar onLogIn={logInSession} onLogOut={logOutSession} />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/detail/:itemid' element={<ItemDetailContainer />} />
            <Route path='/category/:categoryid' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path="/thank-you" element={<h2>¡Gracias por tu compra!</h2>} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
