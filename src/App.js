import React, { Component } from 'react';

import './App.css';
import ProductTable from '../src/components/ProductTable'
import FilterPanelComponent from '../src/components/FilterPanelComponent';


class App extends Component {

  constructor(props){
    super(props);
    console.log(this.props);

    let companies = this.props.data.allCompanies.map((company) => ({ name: company.name, id: company.id }));
    console.log(`companies:`);
    console.log(companies);
    let filterByCompany ={};

    companies.forEach((element) => {
      filterByCompany[element.id] =true;  
    });

    this.state ={
      allCompanies:companies,
      filterByCompany
    }
    this.updateFilterByCompany = this.updateFilterByCompany.bind(this);

  }

  updateFilterByCompany(idCompany,value){

    this.setState((prevState,props) =>{

      let newFilterByCompany = Object.assign({}, prevState.filterByCompany, {[idCompany]:value });
      return{
        filterByCompany: newFilterByCompany
      }

    })
  }
  render() {
    return (
      <div className="row">
          <div className="col-md-4">
            <FilterPanelComponent 
             companiesInfo = {this.props.companiesInfo} 
             filterByCompany = {this.state.filterByCompany}
             updateFilterByCompany = {this.updateFilterByCompany}/>
          </div>
          <div className="col-md-8">
            <ProductTable  
              companies={this.props.data.allCompanies} 
              filterByCompany = {this.state.filterByCompany}/>
          </div>
      </div>
    );
  }
}

export default App;
