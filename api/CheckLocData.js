import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function CheckLocData(lat, lon, activity, token) {

    return await axios.get(`${REACT_APP_API_BASE_URL}location`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Activity': `${activity}`,
            'Lat': `${lat}`,
            'Lon': `${lon}`,
        }
    })
}