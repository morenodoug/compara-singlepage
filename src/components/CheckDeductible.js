import React, { Component } from 'react';

class CheckDeductible extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        console.log(e.target.name);
        console.log(e.target.checked);
        this.props.updateFilterByDeductibles (e.target.name, e.target.checked);
        
    }
    

    render(){

        return(
            <div  className="col-md-1">
                <label>
                    <input
                        name= {this.props.deductibleName}
                        checked = {this.props.checkedInput}
                        type = "checkbox" 
                        onChange = {this.handleOnChange}  /> 
                    {this.props.deductibleName}
  
                </label> 
            </div>
        );        
    }


}

export default CheckDeductible;