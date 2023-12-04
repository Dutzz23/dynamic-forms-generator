import AuthConfig from "./AuthConfig";

export default class ApiConfig {
    static #baseUrl = "";
    static #apiHost = "";

    static get baseUrl() {
        return this.#baseUrl;
    }

    static get apiHost() {
        return this.#apiHost;
    }

    static apiHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }

    static apiSecureHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AuthConfig.token}`
        }
    }
}