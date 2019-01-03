import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SignupHeader extends Component {
  render() {
    return (
         
         <div className="main-header-inner">
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
   </div>
           </div> 
     </nav>
      
  <div class="showcase container">
    <div class="row">
      <div class="col s12 m9 offset-m2 center">
        <h5>Welcome to Quazzu</h5>
        <h2>Create an Account </h2>
        <br/>
     
    </div>
    </div>
  </div>                  
  </div>
      
      
      
      
    

    )
  }
}
