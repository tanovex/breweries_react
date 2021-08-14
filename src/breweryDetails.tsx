import React from 'react'
import { Button } from 'react-bootstrap';
import { Brewery } from './api/openBreweryDBapi';
import { formatAddress } from './breweryList';
import GoogleMapReact from 'google-map-react';

type GeoPoint = {
    lat: number,
    lng: number,
};
type AnyReactComponentProp = {
    text: string, 
    lat: number, 
    lng: number
};

const AnyReactComponent = (prop: AnyReactComponentProp) => <div>{prop.text}</div>;

// breweryDetails
const breweryDetails = (brewery : Brewery | null, handleClick : () => void) => {
    let center : GeoPoint = {
        lat: brewery?.latitude as number,
        lng: brewery?.longitude as number,
    };

    return (
        <>
      

        <div className="container my-5">
            <Button variant="dark" className="float-start btn-lg" onClick={() => handleClick()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </Button>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <small className="text-end">{brewery?.brewery_type}</small>
                    <h1 className="display-4 fw-bold lh-1">{brewery?.name}</h1>
                    
                    <p className="lead">
                        {formatAddress(brewery as Brewery)}
                    </p>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a href={brewery?.website_url} className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" target="_blank" rel="noreferrer">Website</a>
                    </div>
                    <div className="mapBox">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBf4ukSReMSF1-XQWqb6PqzwMXJsOogRZo" }}
                            defaultCenter={{center}}
                            defaultZoom={11 as number}
                        >

                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        
                        </GoogleMapReact>
                    </div>

                </div>
            </div>
        </div>
        </>
    );    
}


export default breweryDetails;