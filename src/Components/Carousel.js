import React, { Component } from 'react'
import '../App.css';

 class Carousel extends Component {
  render() {
    return (
      <div>
               <div class="carousel" >
     <a className="carousel-item" href="#one!"><img src="../img/python.jpg " alt="not found"/></a>
     <a className="carousel-item" href="#two!"><img src="../img/js.png " alt="not found"/></a>
     <a className="carousel-item" href="#three!"><img src="../img/react.png " alt="not found"/></a>
     <a className="carousel-item" href="#four!"><img src="../img/firebase.png " alt="not found"/></a>
     <a className="carousel-item" href="#five!"><img src="../img/php-logo.png " alt="not found"/></a>
               </div>
      </div>
    )
  }
}


export default Carousel;