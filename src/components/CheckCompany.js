import React, { Component } from 'react';

class CheckCompany extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e){
        console.log(e.target.name);
        
    }
    

    render(){

        return(
            <div  className="row">
                <label>
                    <input name={this.props.company.id} type="checkbox" onChange={this.handleOnChange}  checked="true"/> {this.props.company.name}  
                </label> 
            </div>
        );        
    }


}

export default CheckCompany;