import axios from "axios";

export async function CheckIsComplete(token, countryName, cityName, activity_id) {
    return await axios.get(`http://192.168.5.222:5005/complete`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Activity': `${activity_id}`
        }})
}