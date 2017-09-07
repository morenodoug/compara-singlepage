import React, { Component } from 'react';
import CheckDeductible from './CheckDeductible'

class DeductiblesFilter extends Component {

    constructor(props){
        super(props);
 
    }


    render() {
        let deductibleFilters = null;
        if(this.props.filterByDeductibles){
            let objectKeys = Object.keys(this.props.filterByDeductibles);
            deductibleFilters = objectKeys.map((key) =>
                (<CheckDeductible 
                    key={key}
                    checkedInput ={this.props.filterByDeductibles[key]} 
                    deductibleName={key}
                    updateFilterByDeductibles ={this.props.updateFilterByDeductibles}  /> 
                ));            

        }



        return(

            <div>
                <div className="row">
                    <h3>Deductibles</h3>
    
                    {deductibleFilters}
                </div>

            </div>
        );
        
 
    }
}

export default DeductiblesFilter;