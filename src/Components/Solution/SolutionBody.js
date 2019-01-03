import React, { Component } from 'react'

 class SolutionBody extends Component {
  render() {
    return (
      <div className="section-solution-about">
        <div className="container">
            <div className="row">
                <div className="col s12 m5">
                <h2>What we do</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat nihil aliquid unde ab eius id laboriosam praesentium dignissimos voluptatum!
                </p>
                </div>
                
                <div className="col s12 m1"></div>
                
                <div className="col s12 m6">
                
                <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s4"><a href="#tab1" class="active purple-text">Cloud Storage</a></li>
        <li class="tab col s4"><a href="#tab2" class=" purple-text">Cloud Hoisting </a></li>
         <li class="tab col s4"><a href="#tab3" class=" purple-text">Cloud Database</a></li>
      </ul>
    </div>
    <div id="tab1" class="col s12">
    <h5>Cloud Storage </h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat nihil aliquid unde ab eius id laboriosam praesentium dignissimos voluptatum!</p>
    </div>
    <div id="tab2" class="col s12">
    <h5>Cloud Hoisting </h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat nihil aliquid unde ab eius id laboriosam praesentium dignissimos voluptatum!</p>
    </div>
    <div id="tab3" class="col s12">
    <h5>Cloud Database</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat nihil aliquid unde ab eius id laboriosam praesentium dignissimos voluptatum!</p>
    </div>
  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}



export default SolutionBody;