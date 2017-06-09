import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { formatCurrency, formatLocalCurrency } from './Utils'

export class CurrencyInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    const target = e.target;
    var value = target.value;
    const name = target.name;

    value = parseFloat(value.replace(/[^0-9\.]/g, ""));
    this.setState({ value : value });
    //this.props.onChange(e);
  }

  handleBlur = (e) => {
    this.props.onChange(e);
  }

  render() {
    const {onChange, name, value, placeholder} = this.props
    return(
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={formatLocalCurrency(this.state.value)}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

CurrencyInput.PropTypes = {
  value : PropTypes.string,
  name : PropTypes.string,
  placeholder : PropTypes.string,
  onChange : PropTypes.func
}
