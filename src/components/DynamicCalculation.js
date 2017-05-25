import React, { Component } from 'react';
import AddButton from './ButtonGroup'
import MemberTable from './MemberTable'
import { Grid } from 'react-bootstrap';

export default class DynamicCalculation extends Component {
  
  constructor(props){
    super(props);
    this.members = [];
    this.totals = {};
    this.state = {
      members:this.members,
      totals:this.totals
    };
  }

  addMember = (member,totals) => {
    this.members.push(member);
    this.totals = totals;
    this.setState({
      members: this.members,
      totals: this.totals
    });
  }

  render(){
    return(
      <Grid>
        <MemberTable { ...this.state }/>
        <AddButton onAdd={ this.addMember } totals={this.state.totals} />
      </Grid>
    );
  }
}
