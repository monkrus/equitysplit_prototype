import React, { Component } from 'react';
import AddMember from './AddMember'
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

  addMember = (members,totals) => {
    //this.members.push(member);
    this.members = members;
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
        <AddMember onAdd={ this.addMember } totals={this.state.totals} members={this.state.members}/>
      </Grid>
    );
  }
}
