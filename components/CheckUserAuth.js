import * as SecureStore from "expo-secure-store";
import jwt from "jwt-decode";

export async function CheckUserAuth() {
    let exp
    let tokenString

    try {
        tokenString = await SecureStore.getItemAsync("iScore")
        console.log(tokenString)
        exp = jwt(JSON.stringify(tokenString))
        if (Math.round(Date.now() / 1000) >= exp["exp"]) {
            await SecureStore.deleteItemAsync("iScore")
        } else {
            return JSON.stringify(tokenString)
        }
    } catch (e) {
        console.log("User is not logged in: ", e)
    }
    return false
}