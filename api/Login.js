import axios from "axios";
import {REACT_APP_API_BASE_URL} from '@env'

async function LoginUser(credentials) {
    try {
    console.log(credentials)
    console.log(REACT_APP_API_BASE_URL)
    console.log("New Logg")
        console.log("Credss", credentials)
        return {
            token: await axios.post(`http://192.168.5.222:5005/accounts-login`, JSON.stringify(credentials)),
            error: null
        }

    } catch (e) {
        console.log(e)
        return {
            token: null,
            error: e
        };
    }
}

export default LoginUser