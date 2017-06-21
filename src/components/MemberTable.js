import React, { Component } from 'react'
import { Table, Checkbox } from 'react-bootstrap'
import { Totals } from './'
import { formatCurrency } from '../utils/Utils'

export default class MemberTable extends Component {

  handleChange = (e) => {
    const target = e.target;
    const value = target.checked;
    const name = target.name;

    let members = this.props.members;
    //it should be checked by id, not name, as a key later when we have DB
    let checkedMember = members[name.replace('checkbox','')];
    checkedMember.checkbox = value;

    this.props.onCheck(members);
  }

  render(){
    let members = this.props.members.map((member,index) => {
          return(
            <tr key={index}>
              <th><Checkbox name={'checkbox'+index} checked={member.checkbox} onChange={this.handleChange} /></th>
              <td>{member.name}</td>
              <td>{formatCurrency(member.share)}</td>
              <td>{Math.round(member.shareNumbers).toLocaleString( "en-US" )}</td>
              <td>{member.sharePercent.toFixed(2)}</td>
              <td>{member.fixedShare.toFixed(2)}</td>
              <td>{formatCurrency(member.nonCash)}</td>
              <td>{formatCurrency(member.investedCash)}</td>
              <td>{member.startDate}</td>
              <td>{member.days}</td>
              <td>{member.vestedDate}</td>
              <td>{member.workedHours}</td>
              <td>{member.efficiency.toFixed(2)}</td>
              <td>{formatCurrency(member.salary)}</td>
            </tr>
          );
      });

    return(
      <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Share($)</th>
              <th>Shares(#)</th>
              <th>Share(%)</th>
              <th>Fixed Share(%)</th>
              <th>Non Cash($)</th>
              <th>Invested Cash($)</th>
              <th>Start Date</th>
              <th># Days</th>
              <th>Vested Date</th>
              <th>Worked Hours</th>
              <th>Efficiency(%)</th>
              <th>Salary($)</th>
            </tr>
          </thead>
          <tbody>
            {members}
            <Totals totals={this.props.totals} />
          </tbody>
        </Table>
    );
  }
}
