import React, { Component } from 'react';

import './App.css';
import ProductTable from '../src/components/ProductTable'
import FilterPanelComponent from '../src/components/FilterPanelComponent';


class App extends Component {

  constructor(props){
    super(props);
    // console.log(this.props.data);

  }
  render() {
    return (
      <div className="row">
          <div className="col-md-4">
            <FilterPanelComponent  companiesInfo={this.props.companiesInfo}/>
          </div>
          <div className="col-md-8">
            <ProductTable  companies={this.props.data.allCompanies} />
          </div>
      </div>
    );
  }
}

export default App;
