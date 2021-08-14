import React from "react";
import './App.scss';
import { getBreweryListByCity, Brewery } from "./api/openBreweryDBapi";
import breweryList from './breweryList';
import breweryDetails from './breweryDetails';



export type AppProps = {
};
type AppState = {
  showDetails: boolean;
  selectedBrewery: Brewery | null;
  breweries: Brewery[];
  selectedCity: string;
};
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      showDetails: false,
      selectedBrewery: null,
      selectedCity: "Harrisburg",
      breweries: [],
    };
  }
  loadBreweries = () => {    
    getBreweryListByCity(this.state.selectedCity).then((_breweries: Brewery[]) => { 
      this.setState({ breweries: _breweries });
    });
  }
  componentDidMount() {
    this.loadBreweries();
  }

  handleClickDetails = (id: number) => {
    console.log(id);
    let brewery : Brewery = this.state.breweries.find(x => x.id === id) as Brewery;
    this.setState({ selectedBrewery: brewery, showDetails: true });
    
  }

  handleClickList = () => {
    this.setState({ selectedBrewery: null, showDetails: false });
  }

  render() {

    return (
      <div className="App">
        {!this.state.showDetails && (
          breweryList(this.state.breweries, this.handleClickDetails)
        )}

        {this.state.showDetails && (
          breweryDetails(this.state.selectedBrewery, this.handleClickList)
        )}
      </div>
    );
  }
}

const PRODUCTS = [
    {
      "id": 8400,
      "obdb_id": "appalachian-brewing-co-harrisburg-harrisburg",
      "name": "Appalachian Brewing Co - Harrisburg", 
      "brewery_type": "brewpub", 
      "street": "50 N Cameron St", 
      "address_2": null, 
      "address_3": null, 
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17101-2407", 
      "country": "United States", 
      "longitude": "-76.8816961", 
      "latitude": "40.291059", 
      "phone": "7172211080", 
      "website_url": "http://www.abcbrew.com", 
      "updated_at": "2018-08-24T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z"
    },
    { 
      "id": 9132, 
      "obdb_id": "boneshire-brew-works-harrisburg", 
      "name": "Boneshire Brew Works", 
      "brewery_type": "micro", 
      "street": "7462 Derry St", 
      "address_2": null, 
      "address_3": null, 
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17111-5228", 
      "country": "United States", 
      "longitude": "-76.8712077", 
      "latitude": "40.2633825", 
      "phone": "7174127814", 
      "website_url": "http://www.boneshire.com", 
      "updated_at": "2018-08-24T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z" 
    }, 
    { 
      "id": 14533, 
      "obdb_id": "spring-gate-brewery-harrisburg", 
      "name": "Spring Gate Brewery", 
      "brewery_type": "micro", 
      "street": "5790 Devonshire Rd", 
      "address_2": null, 
      "address_3": null, 
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17112-3508", 
      "country": "United States", 
      "longitude": null, 
      "latitude": null, 
      "phone": "7174800066", 
      "website_url": "http://www.springgatebrewery.com", 
      "updated_at": "2018-08-11T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z" 
    }, 
    { 
      "id": 14989, 
      "obdb_id": "the-millworks-brewery-harrisburg", 
      "name": "The Millworks Brewery", 
      "brewery_type": "brewpub", 
      "street": "340 Verbeke St", 
      "address_2": null, 
      "address_3": null, 
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17102-2052", 
      "country": "United States", 
      "longitude": "-76.8874206", 
      "latitude": "40.270538", 
      "phone": "7176954888", 
      "website_url": "http://www.millworksharrisburg.com", 
      "updated_at": "2018-08-24T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z" 
    }, 
    { 
      "id": 15045, 
      "obdb_id": "the-vegetable-hunter-harrisburg", 
      "name": "The Vegetable Hunter", 
      "brewery_type": "brewpub", 
      "street": "614 N 2nd St", 
      "address_2": null, 
      "address_3": null, 
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17101-1001", 
      "country": "United States", 
      "longitude": "-76.8881545", 
      "latitude": "40.2638045", 
      "phone": "7176956229", 
      "website_url": "http://www.TheVegetableHunter.com", 
      "updated_at": "2018-08-24T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z" 
    }, 
    { 
      "id": 15775, 
      "obdb_id": "wolf-brewing-company-harrisburg", 
      "name": "Wolf Brewing Company", 
      "brewery_type": "planning", 
      "street": null, 
      "address_2": null, 
      "address_3": null, 
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17112-1550", 
      "country": "United States", 
      "longitude": null, 
      "latitude": null, 
      "phone": "7176452752", 
      "website_url": "http://www.wolfbrewingco.com", 
      "updated_at": "2018-08-11T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z" 
    }, 
    {
      "id": 15881, 
      "obdb_id": "zeroday-brewing-company-harrisburg", 
      "name": "Zeroday Brewing Company", 
      "brewery_type": "brewpub", 
      "street": "250 Reily St Ste 103", 
      "address_2": null, 
      "address_3": null,
      "city": "Harrisburg", 
      "state": "Pennsylvania", 
      "county_province": null, 
      "postal_code": "17102-2550", 
      "country": "United States", 
      "longitude": "-76.8915931", 
      "latitude": "40.2717061", 
      "phone": "7177456218", 
      "website_url": "http://www.zerodaybrewing.com", 
      "updated_at": "2018-08-24T00:00:00.000Z", 
      "created_at": "2018-07-24T00:00:00.000Z"
    }
    
];

export default App;
