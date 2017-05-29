import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, Col, Row } from 'react-bootstrap';

export default class AddMember extends Component {
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
    var members = [];
    let hourlyRate = this.state.salary/52.1429/37.5;
    let nonCash = this.state.workedHours * hourlyRate;
    var share = nonCash + this.state.investedCash*4;
    let days = Math.floor(new Date(new Date() - new Date(this.state.startDate)) / (1000 * 60 * 60 * 24));
    let startDate = new Date(this.state.startDate);
    var vestedDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+(365*this.state.vestedDate));
    let efficiency = (this.state.workedHours/(days*(5/7)*7.5)) * 100;
    if(Object.keys(this.props.totals).length === 0) {
      var totalShare = share;
      var totalFixedShare = this.state.fixedShare;
      var variableShare = (share/totalShare*(1-totalFixedShare/100)) * 100;
      var sharePercent = parseFloat(this.state.fixedShare) + variableShare;
      var totalSharePercent = sharePercent;
      var totalInvestedCash = this.state.investedCash;
      var totalNonCash = nonCash;
      var totalSalary = this.state.salary;
      var totalDays = days;
      var totalWorkedHours = this.state.workedHours;
    } else {
      totalShare = this.props.totals.totalShare + share;
      totalFixedShare = this.props.totals.totalFixedShare + this.state.fixedShare;
      totalInvestedCash = this.props.totals.totalInvestedCash + this.state.investedCash;
      totalNonCash = this.props.totals.totalNonCash + nonCash;
      totalSalary = this.props.totals.totalSalary + this.state.salary;
      totalDays = this.props.totals.totalDays + days;
      totalWorkedHours = this.props.totals.totalWorkedHours + this.state.workedHours;

      var test = this.props.members;
      members = this.props.members.map(function(member){
        var tempObj = member;
         tempObj.variableShare = (member.share/totalShare*(1-totalFixedShare/100)) * 100;
         tempObj.sharePercent = member.fixedShare + member.variableShare;
        return tempObj;
       });

      totalSharePercent = this.props.members.map(function(member) {
        return member.sharePercent
      }).reduce(function(a, b) {
          return a + b;
      }, 0);

      variableShare = (share/totalShare*(1-totalFixedShare/100)) * 100;
      sharePercent = parseFloat(this.state.fixedShare) + variableShare;
      totalSharePercent += sharePercent;
    }

    var formData = {
      name:this.state.name,
      investedCash:this.state.investedCash,
      fixedShare:this.state.fixedShare,
      startDate:this.state.startDate,
      vestedDate:vestedDate,
      salary:this.state.salary,
      workedHours:this.state.workedHours,
      hourlyRate:hourlyRate,
      nonCash:nonCash,
      share:share,
      days:days,
      efficiency:efficiency,
      sharePercent:sharePercent
    };
    members.push(formData);
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

    //this.props.onAdd(formData,totalData);
    this.props.onAdd(members,totalData);
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
              <Col componentClass={ControlLabel} sm={2} className="text-right">
                Name
              </Col>
              <Col sm={4}>
                <FormControl type="text" name="name" value={this.state.name} placeholder="Enter Name" onChange={this.handleChange} />
              </Col>
              <Col componentClass={ControlLabel} sm={2} className="text-right">
                Fixed Share(%)
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="fixedShare" step="0.01" value={this.state.fixedShare} placeholder="Enter Fixed Share(%). ex) 10" onChange={this.handleChange} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2} className="text-right">
                Start Date
              </Col>
              <Col sm={4}>
                <FormControl type="date" name="startDate" value={this.state.startDate} placeholder="Start Date" onChange={this.handleChange} />
              </Col>
              <Col componentClass={ControlLabel} sm={2} className="text-right">
                Invested Cash
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="investedCash" step="0.01" value={this.state.investedCash} placeholder="Enter Invested Cash. ex) 300" onChange={this.handleChange} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2} className="text-right">
                Vested Years
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="vestedDate" value={this.state.vestedDate} placeholder="Enter Vested Years. ex) 2" onChange={this.handleChange} />
              </Col>
              <Col componentClass={ControlLabel} sm={2} className="text-right">
                Salary
              </Col>
              <Col sm={4}>
                <FormControl type="number" name="salary" step="0.01" value={this.state.salary} placeholder="Enter Salary. ex) 60000" onChange={this.handleChange} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col componentClass={ControlLabel} sm={2} className="text-right">
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
