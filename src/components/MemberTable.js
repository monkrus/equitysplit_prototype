import React, { Component } from 'react'
import Totals from './Totals'
import { formatCurrency } from './Utils'
import { Table, Checkbox } from 'react-bootstrap'

export default class MemberTable extends Component {
  render(){
    let members = this.props.members.map(function(member) {
          return(
            <tr key={member.name}>
              <th><Checkbox /></th>
              <td>{member.name}</td>
              <td>{formatCurrency(member.share)}</td>
              <td>{member.sharePercent.toFixed(2)}</td>
              <td>{member.fixedShare.toFixed(2)}</td>
              <td>{formatCurrency(member.nonCash)}</td>
              <td>{formatCurrency(member.investedCash)}</td>
              <td>{member.startDate}</td>
              <td>{member.days}</td>
              <td>{member.vestedDate.toISOString().substring(0, 10)}</td>
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
