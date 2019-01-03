import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.controlCloseSignup();
  };

  render() {
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Slide in alert dialog
        </Button> */}
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
                 </DialogTitle>
          <DialogContent>
          <div >
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
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

      <div class="row">
      Gender   <br/><br/>
        <div class="col s6">
          <input name="gender" id="test1" type="radio" value="M"    />
          <label for="test1">Male</label>
          &nbsp; &nbsp; &nbsp;
          <input name="gender" id="test2" type="radio" value="F"    />
          <label for="test2">Female</label>   
          
        </div>
      </div>
      
      


      <button type="submit" id="reg-btn" class="waves-effect waves-light btn indigo darken-4" href="#modal1">Register</button>
</form>
</div>
</div>
          </DialogContent>
              </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;