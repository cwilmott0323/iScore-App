import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export const GetUserImages = async (token, setImagesUser, countryName, cityName) => {
    let images = []
    try {
        const r = await axios.get(`${REACT_APP_API_BASE_URL}personalise`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Location': `${countryName}/${cityName}`
            }
        })

        if (r.data[0] === null) {
            return null
        }
        for (const image of r.data[0]){
            images.push(image)
        }
        setImagesUser(images)
        return r
    } catch (e) {
        return ["error", "error"]
    }
}