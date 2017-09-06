import React, { Component } from 'react';

import './App.css';
import ProductTable from '../src/components/ProductTable'


class App extends Component {

  constructor(props){
    super(props);
    // console.log(this.props.data);

  }
  render() {
    return (
      <div className="row">
          <div className="col-md-4">
            <h1>asdasdsad</h1>
          </div>
          <div className="col-md-8">
            <ProductTable  companies={this.props.data.allCompanies}/>
          </div>
      </div>
    );
  }
}

export default App;
