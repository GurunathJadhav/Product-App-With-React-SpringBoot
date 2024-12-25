import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min'
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import UpdateProduct from './pages/UpdateProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/product-list" element={<ProductList/>} />
          <Route exact path="/register-product" element={<Register/>} />
          <Route exact path="/update-product/:id" element={<UpdateProduct/>} />
          <Route exact path="/product-details/:id" element={<ProductDetails/>} />

        </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
