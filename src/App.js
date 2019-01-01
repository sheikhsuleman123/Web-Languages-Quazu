import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import About from './Components/About';
// import Login from './Components/login';
import BroadCast from './Components/BroadCast';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Solution from './Components/Solution';

import {BrowserRouter as Router,Link,Route} from 'react-router-dom';



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
      </div>
      </Router>
      </div>

    );
  }
}

export default App;
