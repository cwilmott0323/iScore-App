import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function GetCityData(countryName, cityName) {
    return await axios.get(`${REACT_APP_API_BASE_URL}countries/${countryName}/cities/${cityName}`)
}