import _ from 'loadash'; //By convention is represented by underscore
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, ListViewComponent} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillUnmount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component will be rendered with this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  //This will recreate our datasource each ttime we fetch data from firebase
  createDataSource({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(employees); //It will accpt array of objects so in mapStateToProps method we also need to  convert it into array of objects using loadash
  }

  renderRow() {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return {employees};
};
export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
