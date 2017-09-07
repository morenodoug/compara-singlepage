import React, { Component } from 'react';
import OfferRow from './OfferRow';

class ProductTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeOrderBy = this.onChangeOrderBy.bind(this);

        // console.log(this.props.companies)
    }
    onChangeOrderBy(e){
        this.props.updateOrderBy(e.target.value);
    }

    render(){
        let showlength = null;
        let offerRows = null;
        if(this.props.companies){

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

            if(this.props.orderBy == "PRICE_DESC"){
 
                offersWithPrices.sort((a,b) =>{
                    return b.price-a.price
                });
            }

            if(this.props.orderBy == "PRICE_ASC"){
 
                offersWithPrices.sort((a,b) =>{
                    return a.price-b.price
                });
            }    

            if(this.props.orderBy == "DEDUC_DESC"){
 
                offersWithPrices.sort((a,b) =>{
                    return b.deductible-a.deductible
                });
            }

            if(this.props.orderBy == "DEDUC_ASC"){
 
                offersWithPrices.sort((a,b) =>{
                    return a.deductible-b.deductible
                });
            }                     
            

            //generar cada offerRow
            offerRows = offersWithPrices.map((offer) => (<OfferRow key={offer.id} info={offer}/>))
            // console.log(flatOffersWithImage);
            // console.log(offerRows);

            showlength = (offerRows.length === 1) ? 
                            `${offerRows.length} result` :
                            `${offerRows.length} results`;




        }

        return (
            <div>
                <div > 
                    <div className="row ">
                        <div className="col-md-6"><h3>{showlength} </h3></div>
                        <div className="col-md-6">

                            <select   value={this.props.orderBy} onChange={this.onChangeOrderBy} className="form-control">
                                <option value = "">Sort By...</option>
                                <option value = "PRICE_DESC">price descending</option>
                                <option value = "PRICE_ASC" >price ascending</option>
                                <option value = "DEDUC_DESC" >deductible descending</option>
                                <option value = "DEDUC_ASC" >deductible ascending</option>
                            </select>                            
                        </div>
                    </div>

                </div>
                <div className="offer-list row">
                    {offerRows}

                </div>
            </div>
        );
    }
}//end class

export default ProductTable;