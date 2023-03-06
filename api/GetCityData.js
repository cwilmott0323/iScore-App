import axios from "axios";

export async function GetCityData(countryName, cityName) {
    return await axios.get(`http://192.168.5.222:5005/countries/${countryName}/cities/${cityName}`)
}