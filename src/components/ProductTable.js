import React, { Component } from 'react';
import OfferRow from './OfferRow';

class ProductTable extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.companies)
    }

    render(){
        //agregar nombre de la compañia e imagen a cada oferta
        let offersWithImage = this.props.companies.map((company) => {
            return company.offers.map((offer) => {
                offer.imageCompanyUrl = company.imageUrl;
                offer.name = company.name;
                return offer;
            });
        });
        let flatOffersWithImage = [].concat.apply([], offersWithImage);

        //generar cara offerRow
        let offerRows = flatOffersWithImage.map((offer) => (<OfferRow key={offer.id} info={offer}/>))
        // console.log(flatOffersWithImage);
        // console.log(offerRows);

        let showlength = (flatOffersWithImage.length === 1) ? 
                        `${flatOffersWithImage.length} result` :
                        `${flatOffersWithImage.length} results`;

        return (
            <div>
                <div > 
                    <div className="row ">
                        <div className="col-md-6"><h3>{showlength} </h3></div>
                        <div className="col-md-6">

                            <select value="lime"  className="form-control">
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>                            
                        </div>
                    </div>

                </div>
                <div className="offer-list">
                    {offerRows}

                </div>
            </div>
        );
    }
}//end class

export default ProductTable;