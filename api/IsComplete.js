import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function CheckIsComplete(token, countryName, cityName, activity_id) {
    return await axios.get(`${REACT_APP_API_BASE_URL}complete`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Activity': `${activity_id}`
        }})
}