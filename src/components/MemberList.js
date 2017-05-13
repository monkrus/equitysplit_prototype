import React from 'react';
import { Table } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default function MemberList() {

    return(
      <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Share($)</th>
              <th>Share(%)</th>
              <th>$ Non Cash</th>
              <th>$ Invested Cash</th>
              <th>Start Date</th>
              <th># Days</th>
              <th>Vested Date</th>
              <th># Worked Hours</th>
              <th>% Efficiency</th>
              <th>$ Salary</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                  </tr>

          </tbody>
        </Table>
    );
}
