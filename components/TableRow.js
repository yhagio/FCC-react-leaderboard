import React, {Component} from 'react';
import TableHeader from './TableHeader';

class TableRow extends Component{
  constructor() {
    super();
    this.state = {
      userData: []
    }
    this.fetchRecent = this.fetchRecent.bind(this);
    this.fetchAllTime = this.fetchAllTime.bind(this);
  }

  componentDidMount() {
    this.fetchRecent();
  }

  fetchRecent() {
    fetch('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => {
        return response.json();
      })
      .then((userData) => {
        this.setState({ userData });
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  }

  fetchAllTime() {    
    fetch('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then((response) => {
        return response.json();
      })
      .then((userData) => {
        this.setState({ userData });
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  }

  render(){
    let userData = this.state.userData.map((data, index) => {
      return (
        <tr key={data.username}>
          <td>{index + 1}</td>
          <td><img src={data.img} alt=""/>{data.username}</td>
          <td>{data.recent}</td>
          <td>{data.alltime}</td>
        </tr>
      );
    });

    return (
      <tbody>
        <TableHeader 
          _fetchRecent={this.fetchRecent}
          _fetchAllTime={this.fetchAllTime}/>
        {userData}
      </tbody>
    );
  }
};

export default TableRow;