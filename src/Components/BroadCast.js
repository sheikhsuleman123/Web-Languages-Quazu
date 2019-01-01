import React, { Component } from 'react';
import '../App.css';

class BroadCast extends Component {

  render() {
    return (
        <div class="testominal">
      <section className="section section-broadcast white-text">
         <div className="primary-overlay valign-wrapper">
           <div className="container">
            <div className="row">
             <div className="col s12 m8 center-align">
          <h4>Listen to the Quazzu Podest</h4>
          <p>Every Thursday at 5pm EST</p>
          </div>
          <div className="col s12 m4 center-align">
          <a href="#" className="btn purple btn-large">
          <i className="fa fa-podest"></i>Listen </a>
          </div> 
        </div>
      </div>
    </div>
    </section>
      
      <section class="section section-testi grey lighten-4">
          <div class="container">
              <div class="row">
                <div class="col s12">
                <div class="carousel carousel-slider center">
                 <div class="carousel-item" href="#one">  
                <h2>Paragraph 1</h2>
                <p> <div class="flow-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Veniam fugiat nihil aliquid unde ab eius id laboriosam<br/> praesentium dignissimos voluptatum!
                </div>
                <em>Hallo Jimmy </em></p>
                {/* <div class="carousel-fixed-item center hide-on-small-and-down">
                 <a href="#" class="btn grey"> Read More </a>
                </div> */}
                      </div>
               
                          
                <div class="carousel-item" href="#two">  
                   <h2>Paragraph 2</h2>
                    <p> <div class="flow-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Veniam fugiat nihil aliquid unde ab eius id laboriosam<br/> praesentium dignissimos voluptatum!
                   </div>
                  <em>Sheikh Suleman Ali</em></p>
                   {/* <div class="carousel-fixed-item center hide-on-small-and-down">
                     <a href="#" class="btn grey"> Read More </a>
                    </div> */}
                </div>

             <div class="carousel-item" href="#three">  
             <h2>Test 3</h2>
             <p> <div class="flow-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Veniam fugiat nihil aliquid unde ab eius id laboriosam<br/> praesentium dignissimos voluptatum!
             </div>
           <em>Sheikh Suleman Ali</em></p>
             
             {/* <div class="carousel-fixed-item center hide-on-small-and-down">
            <a href="#" class="btn grey"> Read More </a>
                 </div> */}
            
                    </div>      
                  </div>
                </div>
              </div>
          </div>
      </section>
    </div>
    );
  }
}

export default BroadCast;
















