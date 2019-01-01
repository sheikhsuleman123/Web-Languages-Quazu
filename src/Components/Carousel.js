import React, { Component } from 'react'
import '../App.css';

 class Carousel extends Component {
  render() {
    return (
      <div>
               <div class="carousel" >
     <a className="carousel-item" href="#one!"><img src="../img/python.jpg " /></a>
     <a className="carousel-item" href="#two!"><img src="../img/js.png " /></a>
     <a className="carousel-item" href="#three!"><img src="../img/react.png " /></a>
     <a className="carousel-item" href="#four!"><img src="../img/firebase.png " /></a>
     <a className="carousel-item" href="#five!"><img src="../img/php-logo.png " /></a>
               </div>
      </div>
    )
  }
}


export default Carousel;