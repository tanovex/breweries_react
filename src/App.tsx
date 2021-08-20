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

  
  breweryStateSelector() {
    return true;
  }

  render() {

    return (
      <div className="App">
        {!this.state.showDetails && (          
          this.breweryStateSelector()
        ) && (
          breweryList(this.state.breweries, this.handleClickDetails)
        )}

        {this.state.showDetails && (
          breweryDetails(this.state.selectedBrewery, this.handleClickList)
        )}
      </div>
    );
  }
}


export default App;

