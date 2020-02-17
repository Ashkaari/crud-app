import React from 'react';
import { connect } from 'react-redux';

import { getPatientsList } from '../actions/patients';

class Patients extends React.Component {
  componentDidMount() {
    this.props.getPatientsList();
  }

  render() {
    const { list = [], loading } = this.props;

    return (
      <div>
        {loading && <div>loading...</div>}
        {list.map(item => (
          <div className="patient_item" key={item._id}>{item.name} {item.lastname}</div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({ list: state.patients.list, loading: state.patients.loading }),
  { getPatientsList }
)(Patients);
