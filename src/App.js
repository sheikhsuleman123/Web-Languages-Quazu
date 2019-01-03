import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import About from './Components/About';
import BroadCast from './Components/BroadCast';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Solution from './Components/Solution/Solution';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginModal from './Components/loginModal';
import Signup from './Components/Signup/Signup';
import SignupPage from './Components/Signup/Signup';


const MainBody = () => {
  return (
    <div>
        <Header />
        <Slider />
        <About />
        <BroadCast />
        <Carousel />
        <Footer />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      
          <div>
        <Router>
          <div>

        <Route exact path="/" component={MainBody}/>
        <Route exact path="/solution" component={Solution}/>
        <Route path="/loginModal" component={LoginModal}/>
        <Route path="/SignupPage" component={SignupPage}/>

      </div>
      </Router>
      </div>

    );
  }
}

export default App;
