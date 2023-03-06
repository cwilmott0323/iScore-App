import axios from "axios";

export async function CheckLocData(lat, lon, activity, token) {
    console.log("Lat, Lon: ", lat, lon)

    return await axios.get(`http://192.168.5.222:5005/location`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Activity': `${activity}`,
            'Lat': `${lat}`,
            'Lon': `${lon}`,
        }
    })
}