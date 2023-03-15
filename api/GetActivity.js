import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function GetActivity(countryName, cityName, activity, setImages) {
    console.log("Starting get Activity")
    let images = []
    const r = await axios.get(`${REACT_APP_API_BASE_URL}countries/${countryName}/cities/${cityName}/${activity}`)
    images.push(r.data[0][0].image_location)
    setImages(images)

    console.log("Get Activityy: ", r)
    return [r]
}