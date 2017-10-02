import React from 'react';
import CheckCompany from './CheckCompany';


export default function  CompanyFilter(props){

    let filterCompanies = props.companiesInfo.map((company) =>( 
        <CheckCompany 
            key={company.id}   
            company={company} 
            checkedInput = {props.filterByCompany[company.id]}
            updateFilterByCompany={props.updateFilterByCompany} /> )
    );    
    return(

        <div>
            <div className="row">
                <h3>Companies</h3>
            </div>
            {filterCompanies}
        </div>
    );
}
