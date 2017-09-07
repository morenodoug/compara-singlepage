import React, { Component } from 'react';

class OfferRow extends Component {
    render() {
        return (
          <div className="col-md-12 offer-row">
            <div className="companyInfo col-md-4">
              <img src={this.props.info.imageCompanyUrl} alt="" className="img-responsive img-company"/>
              <p className="text-center" >{this.props.info.name}</p>
            </div>
            <div className=" offerInfo col-md-8">
              <p className="align-vertical"> <b>Price:</b> ${this.props.info.price}</p>
              <p> <b>Deductible:</b> ${this.props.info.deductible}</p>

            </div>

          </div>
        ) ;
    }
}

export default OfferRow;