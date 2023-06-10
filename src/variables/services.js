import axios from "axios";
import store from "store";
import { logout } from 'store/auth';
const beApiURL = process.env.REACT_APP_BE_API_URL;

export async function request(data) {
    
    var headerConfig = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }

    if (!!data.token) 
        headerConfig['Authorization'] = `Bearer ${data.token}`

    if (!data.method) 
        data.method = "get"

    try {
        const sendRequest = await axios({
            method: data.method, url: `${beApiURL}${data.url}`, data: JSON.stringify(data.data),
            headers: headerConfig
        }).then(response => {

            return response

        });
        return await sendRequest
    } catch (error) {
        if([401,403].includes(error.response.status)){
            store.dispatch(logout())
        }
        return error.response
    }
}
