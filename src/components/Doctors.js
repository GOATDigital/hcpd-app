import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import DoctorItem from '../components/DoctorItem';
import Stickify from '../components/Stickify';
import FilterBarContainer from '../containers/FilterBarContainer';
import DoctorsHeader from '../components/DoctorsHeader';
import DoctorCount from '../components/DoctorCount';
import NoResults from '../components/NoResults';

let itemsMock = Array(10).fill(111).map((i, index) => {return {key:index, value:i}})
let calls = 1;

class Doctors extends Component {

  items = itemsMock

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
    
    const loadFunc = () => {
      calls++;

      let ln = this.items.length;
       this.items.push({
        key: ln + calls,
        value: ln  + calls
      });
       console.log('loadFunc called', calls, this.items);
    }

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

        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            loader={<div className="loader">Loading ...</div>}>
            { this.items.map(i => <div key={Math.random(1)}> <NoResults/> {i.value}</div>)}
        </InfiniteScroll>

        </div>
      </div>
    )
  }
}

export default Stickify(Doctors, 50);

