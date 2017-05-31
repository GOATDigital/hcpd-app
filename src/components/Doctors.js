import React, { Component } from 'react';


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
      isNea,
      sticky,
      isMobile,
      filteredListings
    } = this.props;
    
    return (
      <div className={`page-bg doctors ${(sticky ? 'sticky' : '')}`} >
      <FilterBarContainer />
      {isNea ? <DoctorCount count={this.filteredListingsLength()}/> : ''}
      <div className={'doctors-wrapper'}>
      <DoctorsHeader isMobile={isMobile}/>
       {!isNea ? <DoctorCount count={this.filteredListingsLength()} /> : ''}
        <div className="container">
          {this.renderContent()}
        </div>
        </div>
      </div>
    )
  }
}

export default Stickify(Doctors, 50);

