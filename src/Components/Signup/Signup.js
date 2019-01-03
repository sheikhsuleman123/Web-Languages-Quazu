import React, { Component } from 'react'
import SignupHeader from './SignupHeader';
import SignupBody from './SignupBody';
import Footer from '../Footer';



export default class Signup extends Component {
  render() {
    return (
      <div>
          <SignupHeader />
            <SignupBody />
            <Footer />
      </div>
    )
  }
}
