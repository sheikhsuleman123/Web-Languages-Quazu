import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
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
    this.props.controlCloseLogin();
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
            {/* {"Use Google's location service?"} */}
          </DialogTitle>
          <DialogContent>
          <div>

<div>
<div>
  <center>
<h4>Account Login</h4>
<p>Login to access your account dashboard.</p>
</center>
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
    <button type="submit" id="login-btn" class="waves-effect waves-light btn purple " href="#modal1"> <i className="fa fa-lock "></i>&nbsp; Login</button>
    <button type="submit" id="reg-btn" class="waves-effect waves-light btn indigo darken-4" href="#modal1"><i className="fa fa-sync "></i>&nbsp; Register</button>
   
  </form>
</div>
  </div>
</div>
</div>
          </DialogContent>
         
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;