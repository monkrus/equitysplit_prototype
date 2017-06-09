import React, { Component } from 'react'
import AddMember from './AddMember'
import MemberTable from './MemberTable'
import { Grid, Row, Col } from 'react-bootstrap'
import DeleteMember from './DeleteMember'

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

  onCheck = (members) => {
    this.members = members;
    this.setState({
      members: this.members
    });
  }

  deleteMember = (members,totals) => {
    this.members = members;
    this.totals = totals;
    this.setState({
      members: this.members,
      totals: this.totals
    });
  }

  render(){
    const styles = {
      row : {
        padding: '5px'
      }
    };

    return(
      <Grid>
        <MemberTable { ...this.state } onCheck={this.onCheck}/>
        <Row style={styles.row}>
          <Col md={1}>
            <DeleteMember onDelete={this.deleteMember} members={this.state.members} />
          </Col>
          <Col md={11}>
            <AddMember onAdd={this.addMember} totals={this.state.totals} members={this.state.members}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
