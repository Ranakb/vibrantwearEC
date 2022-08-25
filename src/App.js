import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/Sign-In-And-Sign-Up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/signin' element={<SignInAndSignUpPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
