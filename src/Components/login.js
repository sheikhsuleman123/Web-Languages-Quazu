import React, { Component } from 'react';
import '../App.css'
import Header from './Header';

class Login extends Component {
  render() {
    return (
      <div>

  <div id="modal1" class="modal">
  <div class="modal-content">
  <h4>Account Login</h4>
  <p>Login to access your account dashboard.</p>
  <div class="row">
    <form class="col s12 m12">
    <div class="row">
        <div class="input-field col s12 m12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <button type="submit" id="login-btn" class="waves-effect waves-light btn purple " href="#modal1"> <i className="fa fa-lock"></i>Login</button>
      <button type="submit" id="reg-btn" class="waves-effect waves-light btn indigo darken-4" href="#modal1"><i className="fa fa-sync"></i> Register</button>
     
    </form>
  </div>
    </div>
  </div>

  <div id="modal2" class="modal">
  <div class="modal-content"></div>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"   />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"   />
          <label for="password">Password</label>
        </div>
      </div>
      <button type="submit" id="reg-btn" class="waves-effect waves-light btn indigo darken-4" href="#modal1">Register</button>
</form>
</div>
  </div>



</div>
      
    );
  }
}

export default Login;