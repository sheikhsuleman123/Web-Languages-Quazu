import React, { Component } from 'react'
import Footer from '../Footer';
import SolutionHeader from './SolutionHeader';
import SolutionBody from './SolutionBody';
import Feature from './Features';

 class Solution extends Component {
  render() {
    return (
      <div>
        <SolutionHeader />
        <SolutionBody />
        <Feature />
        <Footer />
      </div>
    )
  }
}


export default Solution;
