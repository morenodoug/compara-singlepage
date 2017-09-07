import React, { Component } from 'react';
import OfferRow from './OfferRow';

class ProductTable extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.companies)
    }

    render(){
        //filtrar por compañia
        let filterByCompany = this.props.companies.filter( (company) =>{
            return this.props.filterByCompany[company.id];
               
        });
        console.log('product table')
        console.log(filterByCompany.length);

        //agregar nombre de la compañia e imagen a cada oferta
        let offersWithImage = filterByCompany.map((company) => {
            return company.offers.map((offer) => {
                offer.imageCompanyUrl = company.imageUrl;
                offer.name = company.name;
                return offer;
            });
        });
        let flatOffersWithImage = [].concat.apply([], offersWithImage);


        //filtrar por deductibles
        let offersWithDeductibles = flatOffersWithImage.filter((offer) =>{
            return this.props.filterByDeductibles[offer.deductible]
        });
          console.log('offersWithDeductibles');
        console.log(offersWithDeductibles);
        

        //offer with prices
        let offersWithPrices = offersWithDeductibles.filter((offer) =>{
            return offer.price<= this.props.filterByPrice
        });
        

        //generar cada offerRow
        let offerRows = offersWithPrices.map((offer) => (<OfferRow key={offer.id} info={offer}/>))
        // console.log(flatOffersWithImage);
        // console.log(offerRows);

        let showlength = (offerRows.length === 1) ? 
                        `${offerRows.length} result` :
                        `${offerRows.length} results`;

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