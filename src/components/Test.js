import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import style from './react-bootstrap-table-all.min.css';

class Test extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[],
      totals:{}
    };
  }

   onAddRow = (row) =>{

         //push row to state. test
     var newMember = {'name': 'test'};
     this.setState({
       //data:this.membersa
       data: [newMember]
     });
   }


   render() {

     const options = {
       onAddRow: this.onAddRow
     };

     const selectRow = {
         mode: 'checkbox' //radio or checkbox
       };

  return(
    <BootstrapTable data={this.state.data} options={ options } insertRow selectRow={ selectRow } deleteRow>
          <TableHeaderColumn dataField="name"  isKey={ true } >Name</TableHeaderColumn>

      </BootstrapTable>
  );
  }
}

export default Test;
