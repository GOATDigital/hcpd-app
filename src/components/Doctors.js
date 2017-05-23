import React, { Component, PropTypes } from 'react';


import DoctorItem from '../components/DoctorItem';
import Stickify from '../components/Stickify';
import FilterBarContainer from '../containers/FilterBarContainer';
import DoctorsHeader from '../components/DoctorsHeader';
import DoctorCount from '../components/DoctorCount';
import NoResults from '../components/NoResults';

class Doctors extends Component {
  componentWillMount() {
  }

  renderContent() {
    if (this.props.filteredListings) {
      return this.props.filteredListings.map(listing => <DoctorItem key={Math.random(1)} { ...listing }/>)
    }
    else {
      // NOTE: MAKE ERROR HELPER AND INSERT HERE
      return <NoResults/>
    }
  }

  filteredListingsLength() {
    const { filteredListings } = this.props
    return filteredListings ? filteredListings.length : 0;
  }

  render() {
    const {
      sticky,
      isMobile,
      filteredListings,
    } = this.props;
    return (
      <div className={`doctors ${(sticky ? 'sticky' : '')}`} >
      <FilterBarContainer />
      <DoctorCount count={this.filteredListingsLength()} />
      <DoctorsHeader isMobile={isMobile}/>
        <div className="container">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default Stickify(Doctors, 50);

