import axios from "axios";
import { REACT_APP_API_BASE_URL } from "@env"

export async function RegisterUser(credentials) {
    delete Object.assign(credentials, {"name": credentials["userName"] })["userName"];
    try {
        return await axios.post(`${REACT_APP_API_BASE_URL}accounts-create`, JSON.stringify(credentials))
    } catch (e) {
        return {
            incorrect: "Account Creation Failed"
        };
    }
}