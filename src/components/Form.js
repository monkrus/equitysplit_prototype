import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Form extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };
  // }
  //
  // getInitialState = () => {
  //   return {
  //     value: ''
  //   };
  // };

  // getValidationState = () => {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>{'kkk'}</div>
    );
  }
}
