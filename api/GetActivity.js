import axios from "axios";

export async function GetActivity(countryName, cityName, activity, setImages) {
    let images = []
    const r = await axios.get(`http://192.168.5.222:5005/countries/${countryName}/cities/${cityName}/${activity}`)
    // images["image3"] = r.data[0][0].image_location;
    images.push(r.data[0][0].image_location)
    setImages(images)

    return [r]
}