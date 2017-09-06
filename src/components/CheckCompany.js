import React, { Component } from 'react';

class CheckCompany extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        console.log(e.target.name);
        console.log(e.target.checked);
        this.props.updateFilterByCompany(e.target.name, e.target.checked);
        
    }
    

    render(){

        return(
            <div  className="row">
                <label>
                    <input
                        checked = {this.props.checkedInput}
                        name = {this.props.company.id} 
                        type = "checkbox" 
                        onChange = {this.handleOnChange}  /> 
                        
                        {this.props.company.name}  
                </label> 
            </div>
        );        
    }


}

export default CheckCompany;