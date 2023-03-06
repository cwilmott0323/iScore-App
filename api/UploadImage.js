import axios from "axios";

export async function UploadImage(photo, token, countryName, cityName, fileName) {
    let match = /\.(\w+)$/.exec(fileName);
    let type = match ? `image/${match[1]}` : `image`;
    console.log(photo)
    const formData = new FormData()
    formData.append('image', { uri: photo, name: fileName, type });
    formData.append("loc", `${countryName}/${cityName}`)

    try {
        console.log("Starting upload")
        const resp = await axios.post(`http://192.168.5.222:5005/upload`, formData,
            {
                headers: {
                    'Accept': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            }
        );
        // setSelectedImage(null)
        // setUploadSuccess("success")
        // await getUserImages(setUserImages, setLoadingf, setNotFound, loc, notFound, token)
        console.log("upload resp: ", resp)
        return resp

    } catch (e) {
        console.log("An error has occured: ", e)
        // setUploadSuccess("fail")

    }

}