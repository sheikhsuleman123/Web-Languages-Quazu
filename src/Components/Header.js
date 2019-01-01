

import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div className="main-header">
      <nav class="transparent">
         <div class="container">
             <div class="nav-wraper">
              <a href="/" class="brand-logo">Quazzu</a>
   <a href="#" data-activates="mobile-nav" class="button-collapse">
   <i class="fa fa-bars"> </i>
   </a>
   <ul class="right hide-on-med-and-down">
   <li>
     
     <a href="/">Home</a>
     </li> 
     <li>
     <Link to="/solution" >Solution</Link>
     </li> 
     <li>
     <a href="#modal2" class="waves-effect waves-light modal-trigger">SignUp</a>
     </li> 
     <li>
     <a href="#modal1" class="waves-effect waves-light btn purple modal-trigger" >Login</a>  
     
     
     <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
     </li> 
     
     <li>
     <a href="https://facebook.com">
     <i className="fab fa-facebook"></i>
     </a>
     </li>
     <li>
     <a href="https://twitter.com">
     <i className="fab fa-twitter"></i>
     </a>
     </li>
     <li>
     <a href="https://instagram.com">
     <i className="fab fa-instagram"></i>
     </a>
     </li> 
     
   </ul>
                     {/* Mobile Navebar  */}
<ul class="side-nav" id="mobile-nav"> 
  <h4 class="purple-text text-darken-4 center">Quazzu </h4>
<li>
  <div class="divider"></div>
</li>
<li>
  <a href="index.html"><i class="fa fa-home purple-text darken-4"></i> Home </a>
</li>
<li>
  <a href="solution.html"><i class="fa fa-cog purple-text darken-4"></i>Solution </a>
</li>
<li>
  <a href="signup.html"><i class="fa fa-users purple-text darken-4"></i>Sign Up </a>
</li>
<li>
  <div class="devider"></div>
</li>

<a class="waves-effect waves-light btn purple modal-trigger" id="login-btn" href="#modal1">Login</a>
</ul>
            </div>
           </div> 
     </nav>
          

  <div class="showcase container">
    <div class="row">
      <div class="col s12 m9 offset-m2 center">
        <h5>Welcome to Quazzu</h5>
        <h2>Build For the Future</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptates eius doloribus unde impedit fugiat hic,<br/> Quidem maxime minus natus. Tempora non adipisci<br/> aliquid quasi beatae veritatis quo.</p>
      <br/>
      <br/>
      <a href="sollution.html" class="btn btn-large white purple-text">Learn More</a>
      <a href="signup.html" class="btn btn-large purple white-text rbtn">Learn More</a>
    </div>
    </div>
  </div>                  
  </div>
      
    );
  }
}

export default Header;
