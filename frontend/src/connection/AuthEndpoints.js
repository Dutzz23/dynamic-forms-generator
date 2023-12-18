import axios, {HttpStatusCode} from "axios";
import ApiConfig from "./ApiConfig";
import AuthConfig from "./AuthConfig";

export default class AuthEndpoints {
    static register(firstName, lastName, username, email, password) {
        return axios.post(ApiConfig.apiHost + "/register",
            {
                email: email,
                password: password,
                username: username,
                firstName: firstName,
                lastName: lastName,
            },
            ApiConfig.apiHeaders)
            .then((response) => {
                if (response.status === HttpStatusCode.Ok) {
                    localStorage.setItem('token', response.data.token);
                    return true;
                }
                return false;
            })
            .catch((error) => console.error(error));
    }

    static login(username, password) {
        return axios.post(ApiConfig.apiHost + "/login_check",
            {
                username: username,
                password: password
            },
            ApiConfig.apiHeaders)
            .then((response) => {
                console.log("login")
                if (response.status === HttpStatusCode.Ok) {
                    localStorage.setItem('token', response.data.token);
                    return true;
                }
                return false;
            })
            .catch((error) => {
                console.error(error);
                return false;
            });
    }

    static logout() {
        //TODO request to server to remove token
        localStorage.removeItem('token');
        window.location.href = "/";
    }
}