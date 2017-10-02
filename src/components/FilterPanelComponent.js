import React, { Component } from 'react';
import CompanyFilter from './CompanyFilter';
import DeduticblesFilter from './DeductiblesFilter';


class FilterPanelComponent extends Component {

    constructor(props){

        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        console.log(this.props.companiesInfo)
       
    }

    handleOnChange(e){
        this.props.updateFilterByPrice(e.target.value);
        console.log(e.target.value);
    }

    render() {

        return(
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <CompanyFilter 
                            companiesInfo = {this.props.companiesInfo}
                            filterByCompany = {this.props.filterByCompany}
                            updateFilterByCompany = {this.props.updateFilterByCompany}/>
                    </div>

                </div>

                <div className="row">
                    <h3>Price Ranges</h3>
                    <div className="col-md-12">
    
                        <div className="form-inline">

                            <div className="form-group">

                                <input 
                                className="form-control" 
                                name="prueba" 
                                id="prueba"
                                type="range"
                                min="0" 
                                max="200" 
                                step="50"  
                                list="tickmarks" 
                                value= { this.props.filterByPrice}
                                onChange={this.handleOnChange}  />     

                                <datalist id="tickmarks">
                                    <option value="0" />
                                    <option value="50" />
                                    <option value="100" />
                                    <option value="150" />
                                    <option value="200" />                                                                        
                                </datalist>                                      

                                <label > {this.props.filterByPrice}</label>    

                            </div>

                        </div>

                    </div>


                </div>

                <div className="row">
                    <div className="col-md-12 form-inline">
                        <DeduticblesFilter 
                            filterByDeductibles={this.props.filterByDeductibles}
                            updateFilterByDeductibles ={this.props.updateFilterByDeductibles }/>
                    </div>
                    

                </div>                

            </div>
 
        );
        

    }
}

export default FilterPanelComponent;