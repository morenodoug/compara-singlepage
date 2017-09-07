import React, { Component } from 'react';

import './App.css';
import ProductTable from '../src/components/ProductTable'
import FilterPanelComponent from '../src/components/FilterPanelComponent';


class App extends Component {

  constructor(props){
    super(props);
    console.log(this.props);

    let companies = this.props.data.allCompanies.map((company) => ({ name: company.name, id: company.id }));

    this.updateFilterByCompany = this.updateFilterByCompany.bind(this);
    this.updateFilterByDeductibles = this.updateFilterByDeductibles.bind(this);
    this.updateFilterByPrice = this.updateFilterByPrice.bind(this);

    console.log(`companies:`);
    console.log(companies);
    let filterByCompany ={};
    let filterByDeductibles={
      '0': true,
      '3': true,
      '5': true,
      '7': true
    }

    let filterByPrice=50;

    companies.forEach((element) => {
      filterByCompany[element.id] =true;  
    });


    this.state ={
      allCompanies:companies,
      filterByCompany,
      filterByDeductibles,
      filterByPrice
    }
   

  }

  updateFilterByCompany(idCompany,value){

    this.setState((prevState,props) =>{

      let newFilterByCompany = Object.assign({}, prevState.filterByCompany, {[idCompany]:value });
      return{
        filterByCompany: newFilterByCompany
      }

    })
  }


  updateFilterByDeductibles(idDeductible,value){

    this.setState((prevState,props) =>{

      let newFilterByDeductibles = Object.assign({}, prevState.filterByDeductibles, {[idDeductible]:value });
      return{
        filterByDeductibles: newFilterByDeductibles
      }

    })
  }

  updateFilterByPrice(price){
    this.setState((prevState,props) =>{
      return {
        filterByPrice:price
      };
    })
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-4">
            <FilterPanelComponent 
             companiesInfo = {this.props.companiesInfo} 
             filterByCompany = {this.state.filterByCompany}
             updateFilterByCompany = {this.updateFilterByCompany}
             filterByDeductibles = {this.state.filterByDeductibles}
             updateFilterByDeductibles = {this.updateFilterByDeductibles} 
             filterByPrice = {this.state.filterByPrice}
             updateFilterByPrice = {this.updateFilterByPrice}
             />
          </div>
          <div className="col-md-8">
            <ProductTable  
              companies={this.props.data.allCompanies} 
              filterByCompany = {this.state.filterByCompany}
              filterByDeductibles = {this.state.filterByDeductibles}
              filterByPrice = {this.state.filterByPrice}/>
          </div>
      </div>
    );
  }
}

export default App;
