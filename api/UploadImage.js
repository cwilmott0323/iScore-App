import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function UploadImage(photo, token, countryName, cityName, fileName) {
    let match = /\.(\w+)$/.exec(fileName);
    let type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData()
    formData.append('image', { uri: photo, name: fileName, type });
    formData.append("loc", `${countryName}/${cityName}`)

    try {
        const resp = await axios.post(`${REACT_APP_API_BASE_URL}upload`, formData,
            {
                headers: {
                    'Accept': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            }
        );
        return resp

    } catch (e) {
        console.log("An error has occured: ", e)
    }

}