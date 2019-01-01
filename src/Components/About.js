import React, { Component } from 'react';
import './about.css';
class About extends Component {
  render() {
    return (
      <div id="About"> 
      <div className="section section-about grey lighten-4">
        <div class="container">
            <div class="row">
              <div class="col s12 m6">
                <h3><span class="deep-purple-text">About</span> Us</h3>
                <p class="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde quam nostrum consectetur eaque aliquam dolor blanditiis! Nobis deserunt expedita veritatis delectus debitis incidunt magnam! Fuga perferendis cumque mollitia reprehenderit!</p>
                </div>
                <div class="col m1"></div>
                <div class="col s12 m5">
                    <img src="../img/tech.jpg" alt="" class="circle responsive-img" ></img>
                </div>
            </div>
        </div>
      </div>

<div class="section section-developers white-text">
  <div class="primary-overlay valign-wrapper">
    <div class="container">
       <div class="row">
         <div class="col s12 center">
           <h3> For Developers , By Developers</h3>
         </div>
       </div>
    </div>
</div>
</div>

<div class="section section-language grey lighten-4"></div>
  <div class="container">
    <div class="row">
      <h4 class="col s12 center"> Work With <span class="deep-purple-text text-dar">
        Any Language</span></h4>
    </div>
    <br/><br/>
<div class="row">
  <div class="col s2">
    <img src="../img/python-logo.png" class="responsive-img" alt="" />
  </div>
  <div class="col s2">
      <img src="../img/ruby-logo.png" class="responsive-img" alt="" />
    </div>
    <div class="col s2">
        <img src="../img/node-logo.png" class="responsive-img" alt="" />
      </div>
      <div class="col s2">
          <img src="../img/php-logo.png" class="responsive-img" alt="" />
        </div>
        <div class="col s2">
            <img src="../img/c-sharp-logo.png" class="responsive-img" alt="" />
          </div>
          <div class="col s2">
              <img src="../img/java-logo.png" class="responsive-img" alt="" />
            </div>

</div>
  </div>
    </div>
    );
  }
}

export default About;
