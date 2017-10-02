import React, { Component } from 'react';

import './App.css';
import ProductTable from '../src/components/ProductTable'
import FilterPanelComponent from '../src/components/FilterPanelComponent';
import getItems from '../src/client'


class App extends Component {

  constructor(props){
    
    super(props);


    this.updateFilterByCompany = this.updateFilterByCompany.bind(this);
    this.updateFilterByDeductibles = this.updateFilterByDeductibles.bind(this);
    this.updateFilterByPrice = this.updateFilterByPrice.bind(this);
    this.updateOrderBy = this.updateOrderBy.bind(this); 

    this.state ={
       orderBy:'',
       allData:[],
       allCompanies: [],
       filterByDeductibles: {
            '0': true,
            '3': true,
            '5': true,
            '7': true
      },
      filterByPrice:50    

    }
   

  }
  componentDidMount(){

    let filterByCompany ={};

     getItems()
     .then((data) =>{
        let companies = data.allCompanies.map((company) => ({ name: company.name, id: company.id }));

        companies.forEach((element) => {
          filterByCompany[element.id] =true;  
        });
        this.setState((prevState) =>{
          return Object.assign({},
                              prevState,
                              {allData: data.allCompanies},
                              {allCompanies:companies},
                              {filterByCompany} );
        })
    });
    
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
  
  updateOrderBy(newOrderBy){
    this.setState((prevState,props) => {
      return {
        orderBy: newOrderBy
      }
    });
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-4  filter-panel">
            <FilterPanelComponent 
           
             companiesInfo = {this.state.allCompanies} 
             filterByCompany = {this.state.filterByCompany}
             updateFilterByCompany = {this.updateFilterByCompany}
             filterByDeductibles = {this.state.filterByDeductibles}
             updateFilterByDeductibles = {this.updateFilterByDeductibles} 
             filterByPrice = {this.state.filterByPrice}
             updateFilterByPrice = {this.updateFilterByPrice}
             />
          </div>
          <div className="col-md-7 col-md-offset-1">
            <ProductTable  
              companies={this.state.allData} 
              filterByCompany = {this.state.filterByCompany}
              filterByDeductibles = {this.state.filterByDeductibles}
              filterByPrice = {this.state.filterByPrice}
              orderBy = {this.state.orderBy}
              updateOrderBy = {this.updateOrderBy}/>
          </div>
      </div>
    );
  }
}

export default App;
