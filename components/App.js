import React, {Component} from 'react';
import {render} from 'react-dom';
import TableRow from './TableRow';


require('../public/main.scss');

class App extends Component{
  constructor() {
    super();
  }

  render(){
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th colSpan="4"><h1>FCC Camper Leaderboard</h1></th>
            </tr>
          </thead>
            <TableRow />
        </table>
      </div>
    )
  }
};

render(<App/>, document.getElementById('main'));