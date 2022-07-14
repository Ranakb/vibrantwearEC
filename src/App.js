import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
function App() {
 
  return (
    
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
