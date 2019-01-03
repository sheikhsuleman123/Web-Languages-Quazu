import React, { Component } from 'react';
import './header.css';
import Login from './loginModal';
import Signup from './signupModal';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      modalOpenLogin : false,
      modalOpenSignup : false
    }
  }
  showLoginModalFunction(){
    this.setState({modalOpenLogin:true});
  }
  sendLoginFunctionToRecieveInfo(){
    this.setState({modalOpenLogin:false});
  }

  showSignupModalFunction(){
    this.setState({modalOpenSignup:true});
  }
  sendSignupFunctionToRecieveInfo(){
    this.setState({modalOpenSignup:false});
  }
  render() {
    return (
    <div className="main-header">
      <nav className="transparent">
         <div className="container">
             <div className="nav-wraper">
              <a href="/" className="brand-logo">Quazzu</a>
   <a href="#" data-activates="mobile-nav" className="button-collapse">
   <i className="fa fa-bars"> </i>
   </a>
   <ul className="right hide-on-med-and-down">
    
    <li>
     <a href="/">Home</a>
     </li> 
    
     <li>
     <a href="/solution" >Solution</a>
     </li> 
    
     <li>
     <a className="waves-effect waves-light btn blue-darken-3 modal-trigger" onClick={this.showSignupModalFunction.bind(this)}>SignUp</a>
     </li> 
    
     <li>
     <button className="waves-effect waves-light btn purple modal-trigger" onClick={this.showLoginModalFunction.bind(this)} >Login</button>
    
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
<ul className="side-nav" id="mobile-nav"> 
  <h4 className="purple-text text-darken-4 center">Quazzu </h4>
<li>
  <div className="divider"></div>
</li>
<li>
  <a href="index.html"><i className="fa fa-home purple-text darken-4"></i> Home </a>
</li>
<li>
  <a href="solution.html"><i className="fa fa-cog purple-text darken-4"></i>Solution </a>
</li>
<li>
  <a href="signup.html"><i className="fa fa-users purple-text darken-4"></i>Sign Up </a>
</li>
<li>
  <div className="devider"></div>
</li>

<a className="waves-effect waves-light btn purple modal-trigger" id="login-btn" href="#modal1">Login</a>
</ul>
            </div>
           </div> 
     </nav>
          

  <div className="showcase container">
    <div className="row">
      <div className="col s12 m9 offset-m2 center">
        <h5>Welcome to Quazzu</h5>
        <h2>Build For the Future</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptates eius doloribus unde impedit fugiat hic,<br/> Quidem maxime minus natus. Tempora non adipisci<br/> aliquid quasi beatae veritatis quo.</p>
      <br/>
      <br/>
      <a href="sollution.html" className="btn btn-large white purple-text">Learn More</a>
      <a href="signup.html" className="btn btn-large purple white-text rbtn">Learn More</a>
    </div>
    </div>
  </div> 
    {
      this.state.modalOpenLogin && <Login controlCloseLogin={this.sendLoginFunctionToRecieveInfo.bind(this)}/>
    }                 
     {
      this.state.modalOpenSignup && <Signup controlCloseSignup={this.sendSignupFunctionToRecieveInfo.bind(this)}/>
    }                 
  </div>
      
    );
  }
}

export default Header;
