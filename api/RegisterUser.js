import axios from "axios";

export async function RegisterUser(credentials) {
    delete Object.assign(credentials, {"name": credentials["userName"] })["userName"];
    try {
        console.log("Creds: ",credentials)
        return await axios.post(`http://192.168.5.222:5005/accounts-create`, JSON.stringify(credentials))
    } catch (e) {
        return {
            incorrect: "Account Creation Failed"
        };
    }
}