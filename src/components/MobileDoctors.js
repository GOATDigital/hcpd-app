import React, { Component } from 'react';


class MobileDoctors extends Component {

  render() {
    return (
      <div className="mobileDoctors">
        <SelectedDoctor />
        <MobileDoctorList />
        <MobileFilterBarContainer />
      </div>
    )
  }
}

export default MobileDoctors;

