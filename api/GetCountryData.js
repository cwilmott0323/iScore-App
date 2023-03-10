import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function GetCountryData(setCountryData, selected, setLoading, setLoadingCountries) {
    if (!selected.length) {
        alert("Please select a country")
    }
    const r = await axios.get(`${REACT_APP_API_BASE_URL}countries/${selected}/cities`)

    setCountryData(r.data)
    setLoading(false)
    setLoadingCountries(true)

}