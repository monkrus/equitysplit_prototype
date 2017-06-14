import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class DeleteMember extends Component {

  handleClick = (e) => {
    //find members to be deleted by checking delete flag and
    //var members = this.props.members;
    var uncheckedMembers = this.props.members.filter((member) => {
      return member.checkbox !== true
    })

    //clear checkbox values to all rows. becase it is currently use array index as key not from db key
    uncheckedMembers.map(function(member) {
      return member.checkbox = false
    })
    //Recalculate totals values after deletion checked members=>it has same add calculation => extract as a function
    var totalShare = uncheckedMembers.map(member => {
      return member.share
    }).reduce((a, b) => { return a + b; }, 0);

    var totalSharePercent = uncheckedMembers.map(member => {
      return member.sharePercent
    }).reduce((a, b) => { return a + b; }, 0);

    var totalFixedShare = uncheckedMembers.map(member => {
      return member.fixedShare
    }).reduce((a, b) => { return a + b; }, 0);

    var totalInvestedCash = uncheckedMembers.map(member => {
      return member.investedCash
    }).reduce((a, b) => { return a + b; }, 0);

    var totalNonCash = uncheckedMembers.map(member => {
      return member.nonCash
    }).reduce((a, b) => { return a + b; }, 0);

    var totalDays = uncheckedMembers.map(member => {
      return member.days
    }).reduce((a, b) => { return a + b; }, 0);

    var totalWorkedHours = uncheckedMembers.map(member => {
      return member.workedHours
    }).reduce((a, b) => { return a + b; }, 0);

    var totalSalary = uncheckedMembers.map(member => {
      return member.salary
    }).reduce((a, b) => { return a + b; }, 0);

    var totalData = {
        totalShare:totalShare,
        totalSharePercent:totalSharePercent,
        totalFixedShare:totalFixedShare,
        totalInvestedCash:totalInvestedCash,
        totalNonCash:totalNonCash,
        totalDays:totalDays,
        totalWorkedHours:totalWorkedHours,
        totalSalary:totalSalary
      };
    this.props.onDelete(uncheckedMembers,totalData);
  }
  render(){

    if(Object.keys(this.props.members).length !== 0) {
      return(
        <div>
            <Button color="primary" onClick={this.handleClick} >Delete</Button>
        </div>
      );
    } else
      return false
  }
}
