import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart';


function App() {
  return (
 <>
     <Navbar />
     
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/products">
        <Route index element={<Products />} />
      </Route>
      <Route path="/products/:id">
        <Route index element={<Product />} />
      </Route>
      <Route path="/cart">
        <Route index element={<Cart />} />
      </Route>
    </Routes>
    
    </>

  );
}

export default App;
