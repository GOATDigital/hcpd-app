import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import DoctorItem from '../components/DoctorItem';
import Stickify from '../components/Stickify';
import FilterBarContainer from '../containers/FilterBarContainer';
import DoctorsHeader from '../components/DoctorsHeader';
import DoctorCount from '../components/DoctorCount';
import NoResults from '../components/NoResults';
import LoadingWheel from './LoadingWheel';

let itemsMock = Array(10).fill(111).map((i, index) => {return {key:index, value:i}})
let calls = 1;

class Doctors extends Component {

  items = itemsMock

  updateDimensions = () => {
      this.setState({width: window.innerWidth});
  }

  componentWillMount() {
      this.updateDimensions();
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }


  renderContent() {
    if (this.props.filteredListings) {
      const isMobileView = this.state.width < 960;
      return this.props.filteredListings.map(listing => <DoctorItem view={isMobileView} key={Math.random(1)} { ...listing }/>)
    }
    else {
      if(this.props.loading){
          return <LoadingWheel />;
      } else {
          return <NoResults/>;
      }

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
      filteredListings
    } = this.props;
    


    const isNaaf = (__APPID__.trim() === 'naaf87561');

    return (
      <div className={`page-bg doctors ${(sticky ? 'sticky' : '')}`} >
      <FilterBarContainer count={this.filteredListingsLength()} />
      <div className={'doctors-wrapper'}>
      <DoctorsHeader isMobile={isMobile}/>
       {!isNaaf ? <DoctorCount count={this.filteredListingsLength()} /> : ''}
        <div className="container">
          {this.renderContent()}
        </div>
        </div>
      </div>
    )
  }
}


    /*const loadFunc = () => {
      calls++;

      let ln = this.items.length;
       this.items.push({
        key: ln + calls,
        value: ln  + calls
      });
       console.log('loadFunc called', calls, this.items);
    }

   <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            loader={<div className="loader">Loading ...</div>}>
            { this.items.map(i => <div key={Math.random(1)}> <NoResults/> {i.value}</div>)}
        </InfiniteScroll>*/

export default Stickify(Doctors, 50);

