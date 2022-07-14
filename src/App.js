import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
function App() {
  const HatsPage = () => {
    <div>
      <h1>Hats Page</h1>
    </div>
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
