import React, { Component } from 'react';

class OfferRow extends Component {
    render() {
        return (
          <div className="row">
            <div className="companyInfo col-md-4">
              <img src={this.props.info.imageCompanyUrl} alt="" className="img-responsive"/>
              <p>{this.props.info.name}</p>
            </div>
            <div className="offerInfo col-md-8">
              <p>price: $ {this.props.info.price}</p>
              <p>deductible: $ {this.props.info.deductible}</p>

            </div>

          </div>
        ) ;
    }
}

export default OfferRow;