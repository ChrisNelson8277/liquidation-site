
import './App.css';
import Header from './components/Header';
import Body from './Body';
import AddProduct from './components/AddProduct';
import { useState } from 'react';
import './components/css/modal.css'
import AboutUs from './components/AboutUs';
import Signup from './components/Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import BodyFooter from './components/Footer';
import AdminPanel from './pages/adminPanel';
import Checkout from './components/Checkout';
import Cart from './components/Cart';


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [shoppingCart, openShoppingCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)
  console.log(cartTotal)

  function openCart() {
    openShoppingCart(!shoppingCart)
  }
  return (


  <Router>
    <AuthProvider>
      <div className="App">
        
        <Routes>
          <Route path="/login" element={<Login /> }></Route>
          <Route path="/checkout" element={<Checkout cartTotal={cartTotal} cartItems={cartItems}/>}></Route>
          <Route path="/adminPanel" element={<PrivateRoute>
            <AdminPanel page={setCurrentPage}/>
                    </PrivateRoute>}></Route>
          <Route path="/addProduct" element={<AddProduct/> }></Route>
          <Route index path="/"  element={<><Header openCart={openShoppingCart} cartState={shoppingCart} cartLength={cartItems.length} page={setCurrentPage}/>{shoppingCart == true && <Cart setTotal={setCartTotal} cartItems={cartItems} setCartItems={setCartItems} cart={openShoppingCart} page={setCurrentPage}/>}<Body cartItems={cartItems} setCartItems={setCartItems}/><AboutUs/><BodyFooter/></>}></Route>
          
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    </AuthProvider>
  </Router>

    
  );
}

export default App;
