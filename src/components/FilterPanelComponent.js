import React, { Component } from 'react';
import CompanyFilter from './CompanyFilter';


class FilterPanelComponent extends Component {

    constructor(props){

        super(props);
        console.log(this.props.companiesInfo)
       
    }

    render() {

        return(
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <CompanyFilter companiesInfo={this.props.companiesInfo}/>
                    </div>

                </div>
                <div className="row">

                </div>
        

            </div>
 
        );
        

    }
}

export default FilterPanelComponent;