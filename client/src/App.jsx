import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Dashboard/>} /> 
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
