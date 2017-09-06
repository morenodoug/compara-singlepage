import React, { Component } from 'react';
import CheckCompany from './CheckCompany';

// function checkCompany(props){
//     return(
//         <div key={props.id} className="row">
//             <label><input name={props.id} type="checkbox"  checked="true"/> {props.name}  </label> 
//         </div>
//     )
// }
class CompanyFilter extends Component {

    constructor(props){
        super(props);
 
    }



    render() {
        let filterCompanies = this.props.companiesInfo.map((company) =>( <CheckCompany key={company.id} company={company}/> ));
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