import React, {Component} from 'react';

class TableHeader extends Component{
  handleFetchAlltime(e) {
    this.props._fetchAllTime();
  }

  handleFetchRecent(e) {
    this.props._fetchRecent();
  }

  render(){
    return (
      <tr>
        <th>#</th>
        <th>Camper Name</th>
        <th 
          className="clickable" 
          onClick={this.handleFetchRecent.bind(this)}>Points in past 30 days</th>
        <th 
          className="clickable"
          onClick={this.handleFetchAlltime.bind(this)}>All time points</th>
      </tr>
    );
  }
};

export default TableHeader;