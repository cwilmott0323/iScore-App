import axios from "axios";

export async function GetCountryData(setCountryData, value, setLoading) {
    if (!value.length) {
        alert("Please select a country")
    }
    const r = await axios.get(`http://192.168.5.222:5005/countries/${value}/cities`)

    setCountryData(r.data)
    setLoading(false)

}