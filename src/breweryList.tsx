import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Brewery } from './api/openBreweryDBapi';

export const formatAddress = (brewery : Brewery) => {
    let address: React.ReactNode[] = [];

    if(brewery.street != null) {
        address.push(brewery.street);
        address.push(<br key={brewery.id + "street"} />);
    }
    if(brewery.address_2 != null) {
        address.push(brewery.address_2);
        address.push(<br key={brewery.id + "address_2"} />);
    }
    if(brewery.address_3 != null) {
        address.push( brewery.address_3 );
        address.push(<br key={brewery.id + "address_3"} />);
    }
    if(brewery.city != null) {
        address.push( brewery.city + ",");
    }
    if(brewery.state != null) {
        address.push(" " + brewery.state);
    }
    if(brewery.county_province != null) {
        address.push(" " + brewery.county_province);
    }
    if(brewery.postal_code != null) {
        address.push(" " + brewery.postal_code);
    }
    if(brewery.country != null) {
        address.push(" " + brewery.country);
    }
    return address;
}

//breweryListItem
const breweryListItem = (brewery : Brewery, handleClick : (id: number) => void) => {
    return (
        <div key={brewery.id} className="list-group-item" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{brewery.name}</h5>
                <div>
                    <small>{brewery.brewery_type}</small>
                </div>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <div>       
                    <address className="mb-1">
                        {formatAddress(brewery)}
                    </address>
                    <small><a href={brewery.website_url}>{brewery.website_url}</a></small>
                </div>
                <div>
                    <Button variant="dark" className="float-end btn-lg" onClick={() => handleClick(brewery.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}

//breweryList
const breweryList = (breweries : Brewery[], handleClick : (id: number) => void) => {

    let rows: React.ReactElement[] = [];
   
    breweries.forEach((brewery:Brewery) => {
        rows.push(
            breweryListItem(brewery, handleClick)
        );
    });
 

    return (    
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
                    <div className="list-group">
                        {rows}
                    </div>
                </div>
            </div>
        </div>
    );    
}


export default breweryList;
