import React, { Component } from 'react';
import CheckCompany from './CheckCompany';


class CompanyFilter extends Component {

    constructor(props){
        super(props);
 
    }

    render() {
        let filterCompanies = this.props.companiesInfo.map((company) =>( 
            <CheckCompany 
                key={company.id}   
                company={company} 
                checkedInput = {this.props.filterByCompany[company.id]}
                updateFilterByCompany={this.props.updateFilterByCompany} /> )
        
        );
        
        console.log(filterCompanies );

        return(

            <div>
                <div className="row">
                    <h3>Companies</h3>
                </div>
                {filterCompanies}
            </div>
        );
        
 
    }
}

export default CompanyFilter;