import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import style from './react-bootstrap-table-all.min.css';

// It's a data format example.
function priceFormatter(cell, row){
  //return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  return parseFloat(cell).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

function numberValidator(value) {
  const nan = isNaN(parseInt(value, 10));
  if (nan) {
    return 'Value must be a number!';
  }
  return true;
}

export default class Table extends Component {

  constructor(props){
    super(props);
    this.members = [];
    this.totals = {'totalShare':0,'totalFixedShare':0};
    var initialTotal = {'totalShare':0,'totalFixedShare':0};
    this.state = {
      data:this.members,
      totals:this.totals
    };
  }

  componentDidMount() {
    // should fetch data from db
    // var totalShare = 0;
    // var totalFixedShare = 0;
  }


   //onAddRow(row) {
   onAddRow = (row) => {
    var totalShare = parseFloat(this.totals.totalShare);
    var totalFixedShare = parseFloat(this.totals.totalFixedShare);
    let hourlyRate = priceFormatter(parseFloat(row.salary)/52.1429/37.5);
    row.days = Math.round(new Date(new Date() - new Date(row.startDate)) / (1000 * 60 * 60 * 24));
    row.nonCash =  priceFormatter(parseFloat(row.workedHours) * hourlyRate);
    row.share = priceFormatter(parseFloat(row.nonCash) + row.investedCash*4);
    totalShare += parseFloat(row.share);
    totalFixedShare += parseFloat(row.fixedShare);
    let variableShare = parseFloat(row.share)/totalShare*(1-totalFixedShare/100);
    console.log('total share: ' + totalShare);
    console.log('totalFixedShare: ' + totalFixedShare);
    console.log('variableShare: '+variableShare);
    console.log('variableShare: '+variableShare.toFixed(2));
    row.sharePercent = parseFloat(row.fixedShare) + variableShare.toFixed(2);
    row.efficiency = priceFormatter(parseFloat(row.workedHours)/(row.days*(5/7)*7.5));

     //push row to state. test
     var newMember = {'name': row.name, 'share': row.share, 'fixedShare': row.fixedShare, 'sharePercent':row.sharePercent, 'nonCash':row.nonCash, 'investedCash':row.investedCash,
       'startDate':row.startDate, 'days':row.days, 'vestedDate':row.vestedDate, 'workedHours':row.workedHours, 'efficiency':row.efficiency, 'salary':row.salary};
     this.members.push(newMember);

     this.totals = {'totalShare':totalShare,'totalFixedShare':totalFixedShare};
     //this.members.push(this.totals);
     this.setState({
       data:this.members,
       totals: this.totals
     });
   }

   onAfterInsertRow = (row) => {

   }

   expandComponent = (row) => {
    return (
      <li>test</li>
    );
  }

   createCustomModalHeader = (closeModal, save) => {
    return (
      <div className='modal-header'>
        <h3>Add New Member</h3>
      </div>
    );
  }

   render() {
     var totalShare= 100;
     var totalFixedShare= 0;
     var total_share_percent = 0;

     const options = {
       //deleteText: 'Delete Member',
       insertText: 'Add Member',
       onAddRow: this.onAddRow,
       afterInsertRow: this.onAfterInsertRow,
       insertModalHeader: this.createCustomModalHeader
     };

     const selectRow = {
         mode: 'checkbox' //radio or checkbox
       };

  return(
    <div>
    <BootstrapTable data={this.state.data} options={ options } insertRow selectRow={ selectRow } deleteRow expandComponent={ this.expandComponent }>
          <TableHeaderColumn dataField="name"  isKey={ true } >Name</TableHeaderColumn>
          <TableHeaderColumn dataField="share" hiddenOnInsert dataFormat={priceFormatter}>Share($)</TableHeaderColumn>
          <TableHeaderColumn dataField="fixedShare" dataFormat={priceFormatter}>Fixed Share(%)</TableHeaderColumn>
          <TableHeaderColumn dataField="sharePercent" hiddenOnInsert>Share(%)</TableHeaderColumn>
          <TableHeaderColumn dataField="nonCash" hiddenOnInsert>$ Non Cash</TableHeaderColumn>
          <TableHeaderColumn dataField="investedCash" editable={ { validator: numberValidator } } dataFormat={priceFormatter}>$ Invested Cash</TableHeaderColumn>
          <TableHeaderColumn dataField="startDate" editable={ { type: 'date' } }>Start Date</TableHeaderColumn>
          <TableHeaderColumn dataField="days" hiddenOnInsert># Days</TableHeaderColumn>
          <TableHeaderColumn dataField="vestedDate" >Vested Date</TableHeaderColumn>
          <TableHeaderColumn dataField="workedHours" editable={ { validator: numberValidator } }># Worked Hours</TableHeaderColumn>
          <TableHeaderColumn dataField="efficiency" hiddenOnInsert>% Efficiency</TableHeaderColumn>
          <TableHeaderColumn dataField="salary" editable={ { validator: numberValidator } } dataFormat={priceFormatter}>$ Salary</TableHeaderColumn>
      </BootstrapTable>

    </div>
  );
  }
}
