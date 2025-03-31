import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import CartContextProvider from './context/cartContextProvider';
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Dashboard/>} /> 
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
