import axios from "axios";
import {REACT_APP_API_BASE_URL} from '@env'

async function LoginUser(credentials) {
    try {
        return {
            token: await axios.post(`${REACT_APP_API_BASE_URL}accounts-login`, JSON.stringify(credentials)),
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