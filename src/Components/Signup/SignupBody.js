import React, { Component } from 'react'
import '../about.css';
export default class SignupBody extends Component {
  render() {
    return (
      <div className= "section-signup">
        
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                <h4>Get a free account</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam non dignissimos unde, amet eius error numquam deserunt? Esse quod veritatis blanditiis eveniet recusandae nulla natus, corporis doloremque nostrum?</p>
                <h4>Download Free Software</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam non dignissimos unde, amet eius error numquam deserunt? Esse quod veritatis blanditiis eveniet recusandae nulla natus, corporis doloremque nostrum?</p>
                <h4>Push to the Platform </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam non dignissimos unde, amet eius error numquam deserunt? Esse quod veritatis blanditiis eveniet recusandae nulla natus, corporis doloremque nostrum?</p>
           </div>
                
         <div className="col s12 m6">
        <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        
            <form>
                <div className = "input-field">
                <input type = "text" id="first_name" />
                <label for="first_name"> First Name  </label>
                </div>
                <div className = "input-field">
                <input type = "text" id="name" />
                <label for="last_name">Last Name  </label>
                </div>
                <div className = "input-field">
                <input type = "text" id="name" />
                <label for="email"> Email  </label>
                </div>
                <div className = "input-field">
                <input type = "password" id="password" />
                <label for="password"> Password  </label>
                </div>
                <div className = "input-field">
                <input type = "text" id="company" />
                <label for="company"> Company  </label>
                </div>
                <div className = "input-field">
                <select id="role">  
                    <option value="" disabled selected>
                    Selected  Role           </option>
                 <option value="professional">
                 Professional Developer </option>
                  <option value="hobbylist">hobbylist</option>
                  <option value="hobbylist">Student</option>
                  <option value="hobbylist">Manager</option>
                  <option value="hobbylist">Other</option>
                  </select>
                <label for="role">Role</label>
                </div>
                <input type="submit" value="Signup" class="btn btn-large purple btn-extend" /> 
            </form>
        </div>        
                </div>
            
             </div>
        </div>
      </div>
    )
  }
}
