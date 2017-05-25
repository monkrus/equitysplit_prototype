import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, Col, Row } from 'react-bootstrap';
import Form from './Form';

export default class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false
    };
  }

  toggle = () => {
    this.setState({ form: !this.state.form });
  }

  handleChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    const filter = "fixedShare investedCash salary workedHours";
    if (filter.indexOf(name) >= 0)
      value = parseFloat(value);
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //let hourlyRate = (parseFloat(this.state.salary)/52.1429/37.5).toFixed(2);
    let hourlyRate = this.state.salary/52.1429/37.5;
    let nonCash = this.state.workedHours * hourlyRate;
    var share = nonCash + this.state.investedCash*4;
    let days = Math.floor(new Date(new Date() - new Date(this.state.startDate)) / (1000 * 60 * 60 * 24));
    if(Object.keys(this.props.totals).length === 0) {
      var totalShare = share;
      var totalFixedShare = this.state.fixedShare;
      var variableShare = share/totalShare*(1-totalFixedShare/100);
      var sharePercent = (parseFloat(this.state.fixedShare) + variableShare ) * 100;
      var totalSharePercent = sharePercent;
      var totalInvestedCash = this.state.investedCash;
      var totalNonCash = nonCash;
      var totalSalary = this.state.salary;
      var totalDays = days;
      var totalWorkedHours = this.state.workedHours;
    } else {
      totalShare = this.props.totals.totalShare + share;
      totalFixedShare = this.props.totals.totalFixedShare + this.state.fixedShare;
      variableShare = share/totalShare*(1-totalFixedShare/100);
      sharePercent = parseFloat(this.state.fixedShare) + variableShare;
      totalSharePercent = this.props.totals.totalSharePercent + sharePercent;
      totalInvestedCash = this.props.totals.totalInvestedCash + this.state.investedCash;
      totalNonCash = this.props.totals.totalNonCash + nonCash;
      totalSalary = this.props.totals.totalSalary + this.state.salary;
      totalDays = this.props.totals.totalDays + days;
      totalWorkedHours = this.props.totals.totalWorkedHours + this.state.workedHours;
    }


    //let variableShare = share/totalShare*(1-totalFixedShare/100);
    //let sharePercent = parseFloat(this.state.fixedShare) + variableShare;
    let efficiency = this.state.workedHours/days*(5/7)*7.5;
    //totalShare += share;
    //totalSharePercent += sharePercent;
    //totalFixedShare += parseFloat(this.state.fixedShare);
/*
    var totalShare = parseFloat(this.totals.totalShare);
    var totalFixedShare = parseFloat(this.totals.totalFixedShare);
    let hourlyRate = priceFormatter(parseFloat(row.salary)/52.1429/37.5);
    row.days = Math.round(new Date (new Date() - new Date(row.startDate)) / (1000 * 60 * 60 * 24));
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
*/


    var formData = {
      //name: this.refs.Name.value
      name:this.state.name,
      investedCash:this.state.investedCash,
      fixedShare:this.state.fixedShare,
      startDate:this.state.startDate,
      vestedDate:this.state.vestedDate,
      salary:this.state.salary,
      workedHours:this.state.workedHours,
      hourlyRate : hourlyRate,
      nonCash : nonCash,
      share : share,
      days : days,
      efficiency : efficiency,
      sharePercent: sharePercent
    };
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
    
    this.props.onAdd(formData,totalData);
  }

  render(){

  const styles = {
    form : {
      padding: '15px'
    },
    row : {
      padding: '5px'
    }
  };


  return(
    <div>
        <Button color="primary" onClick={this.toggle}>Add</Button>
        <Collapse in={this.state.form}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText" style={styles.form} >
            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2} text-right>
                Name
              </Col>
              <Col sm={4}>
                <FormControl type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.handleChange} />
              </Col>
              <Col componentClass={ControlLabel} sm={2}>
                Fixed Share
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="fixedShare"  value={this.state.fixedShare} placeholder="Enter Fixed Share. ex) 300" onChange={this.handleChange} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2}>
                Start Date
              </Col>
              <Col sm={4}>
                <FormControl type="date" name="startDate" value={this.state.startDate} placeholder="Start Date" onChange={this.handleChange} />
              </Col>
              <Col componentClass={ControlLabel} sm={2}>
                Invested Cash
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="investedCash"  value={this.state.investedCash} placeholder="Enter Invested Cash. ex) 300" onChange={this.handleChange} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2}>
                Vested Date
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="vestedDate" value={this.state.vestedDate} placeholder="Enter Vested Date" onChange={this.handleChange} />
              </Col>
              <Col componentClass={ControlLabel} sm={2}>
                Salary
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="salary" step="0.01" value={this.state.salary} placeholder="Enter Salary. ex) 300" onChange={this.handleChange} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2}>
                Worked Hours
              </Col>
              <Col sm={2}>
                <FormControl type="number" name="workedHours" step="0.01" value={this.state.workedHours} placeholder="" onChange={this.handleChange} />
              </Col>
            </Row>

          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>

        </Collapse>
      </div>
  );
  }
}
