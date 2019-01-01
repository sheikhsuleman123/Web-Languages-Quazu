import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer deep-purple lighten-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat nihil aliquid unde ab eius id laboriosam praesentium dignissimos voluptatum!
    </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">HOME</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">SOLUTION</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">SIGN UP</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright deep-purple darken-1">
            <div class="container">
           QUAZZU © 2018 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}


export default Footer;