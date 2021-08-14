
export interface Brewery {
    id: number
    obdb_id: string
    name: string
    brewery_type: string
    street: string
    address_2: string | null 
    address_3: string | null
    city: string
    state: string 
    county_province: string | null
    postal_code: string
    country: string
    longitude: number
    latitude: number
    phone: number 
    website_url: string 
    updated_at: Date
    created_at: Date
}

// todo: add api parameters -> pass to functions to allow for better filtering

// get list (static city)
export const getBreweryListByCity = async (city: string): Promise<Brewery[]> => {
    const url = "https://api.openbrewerydb.org/breweries?by_city="+city;
    const response = await fetch(url.toString());
    const data = await response.json();
    return data;
}
