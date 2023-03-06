import axios from "axios";

export const GetUserImages = async (token, setImagesUser, countryName, cityName) => {
    let images = []
    try {
        const r = await axios.get(`http://192.168.5.222:5005/personalise`, {
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