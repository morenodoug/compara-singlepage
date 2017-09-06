import React, { Component } from 'react';
import OfferRow from './OfferRow';

class ProductTable extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.companies)
    }

    render(){

        let offersWithImage = this.props.companies.map((company) => {
            return company.offers.map((offer) => {
                offer.imageCompanyUrl = company.imageUrl;
                offer.name = company.name;
                return offer;
            });
        });
        let flatOffersWithImage = [].concat.apply([], offersWithImage);

        let offerRows = flatOffersWithImage.map((offer) => (<OfferRow info={offer}/>))
        console.log(flatOffersWithImage);
        console.log(offerRows);
        return (
            <div>
                <div > 

                </div>
                <div >
                    {offerRows}


                </div>
            </div>
        );
    }
}//end class

export default ProductTable;