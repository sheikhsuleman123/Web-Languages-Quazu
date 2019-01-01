import React, { Component } from 'react';

class Slider extends Component {

    render() {
      return (
        <div className="section section-icons">  
       <div class="container">
         <div class="row">
           <div class="col s12 m4">
             <div class="card-panel center">
               <i class="fa fa-user fa-3x deep-purple-text text-darken-2"> </i>
                <h5 class="grey-text text-darken-4">Free Account</h5>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In neque perspiciatis a itaque voluptatum quos.</p> 
             </div>
           </div>
           <div class="col s12 m4">
              <div class="card-panel center">
                <i class="fa fa-database fa-3x deep-purple-text text-darken-2"> </i>
                 <h5 class="grey-text text-darken-4">NoSql Database</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In neque perspiciatis a itaque voluptatum quos.</p> 
              </div>
            </div>
            <div class="col s12 m4">
                <div class="card-panel center">
                  <i class="fa fa-bolt fa-3x deep-purple-text text-darken-2"> </i>
                   <h5 class="grey-text text-darken-4">Fast Connection</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In neque perspiciatis a itaque voluptatum quos.</p> 
                </div>
              </div>
         </div>
       </div>
        </div>
        
      );
    }
  }
  
  export default Slider;
  