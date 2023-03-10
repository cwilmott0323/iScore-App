import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function GetCountries(setCountries, setLoadingCountries) {
    const r = await axios.get(`${REACT_APP_API_BASE_URL}countries/all`)

    setCountries(r.data[0])
    setLoadingCountries(false)
}