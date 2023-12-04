import axios from "axios";
import ApiConfig from "./ApiConfig";
import AuthConfig from "./AuthConfig";

export default class AuthEndpoints {
    static register(email, password, firstName, lastName) {
        return axios.post(ApiConfig.apiHost + "/register",
            {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            },
            ApiConfig.apiHeaders)
            .then((response) => {
                if (response.status === 200) {
                    AuthConfig.token = response.data.token;
                    AuthConfig.isAuthenticated = true;
                }
            })
            .catch((error) => console.error(error));
    }

    static login(email, password) {
        return axios.post(ApiConfig.apiHost + "/login",
            {
                email: email,
                password: password
            },
            ApiConfig.apiHeaders)
            .then((response) => {
                if (response.status === 200) {
                    AuthConfig.token = response.data.token;
                    AuthConfig.isAuthenticated = true;
                }
            })
            .catch((error) => console.error(error));
    }

    static logout() {
        return axios.post(ApiConfig.apiHost + "/logout", {}, ApiConfig.apiSecureHeaders)
            .then((response) => {
                if (response.status === 200)
                    AuthConfig.clear();
            })
            .catch((error) => console.error(error));
    }
}