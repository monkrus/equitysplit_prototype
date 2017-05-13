import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import style from './react-bootstrap-table-all.min.css';

var products = [];
// function addProducts(quantity) {
// const startId = products.length;
// for (let i = 0; i < quantity; i++) {
//   const id = startId + i;
//   products.push({
//     id: id,
//     name: 'Item name ' + id,
//     price: 2100 + i
//   });
// }
// }

//addProducts(5);

// It's a data format example.
function priceFormatter(cell, row){
  //return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  return parseFloat(cell).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export default class Table extends Component {

  // createCustomInsertButton = (openModal) => {
  //    return (
  //      <button style={ { color: 'red' } } onClick={ openModal }>Add rows</button>
  //    );
  //  }

   onAddRow(row) {
     alert('test');
     console.log(row);
     row.days = "444";
   }

   render() {
     const options = {
       //insertBtn: this.createCustomInsertButton
       onAddRow: this.onAddRow
     };

     const selectRow = {
         mode: 'checkbox' //radio or checkbox
       };

  return(
    <BootstrapTable data={products} options={ options } insertRow={true} selectRow={ selectRow } deleteRow>
          <TableHeaderColumn dataField="name" isKey={ true } >Name</TableHeaderColumn>
          <TableHeaderColumn dataField="share" hiddenOnInsert dataFormat={priceFormatter}>Share($)</TableHeaderColumn>
          <TableHeaderColumn dataField="sharePercent" hiddenOnInsert>Share(%)</TableHeaderColumn>
          <TableHeaderColumn dataField="nonCash" hiddenOnInsert>$ Non Cash</TableHeaderColumn>
          <TableHeaderColumn dataField="investedCash" dataFormat={priceFormatter}>$ Invested Cash</TableHeaderColumn>
          <TableHeaderColumn dataField="startDate">Start Date</TableHeaderColumn>
          <TableHeaderColumn dataField="days" hiddenOnInsert># Days</TableHeaderColumn>
          <TableHeaderColumn dataField="vestedDate" hiddenOnInsert>Vested Date</TableHeaderColumn>
          <TableHeaderColumn dataField="workedHours"># Worked Hours</TableHeaderColumn>
          <TableHeaderColumn dataField="efficiency" hiddenOnInsert>% Efficiency</TableHeaderColumn>
          <TableHeaderColumn dataField="salary" dataFormat={priceFormatter}>$ Salary</TableHeaderColumn>
      </BootstrapTable>
  );
  }
}
