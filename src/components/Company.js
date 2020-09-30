import React from 'react';
import Header from './Header';

class Company extends React.Component {
  render () {
    console.log('this.props', this.props);  
    return (
      <Header/>
      //To get the individual company id: this.props.match.params
    );
  }
}

export default Company;