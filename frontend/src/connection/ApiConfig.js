export default class ApiConfig {
    static #baseUrl = "";
    static #apiHost = "http://localhost:8091/api";

    static get baseUrl() {
        return this.#baseUrl;
    }

    static get apiHost() {
        return this.#apiHost;
    }

    static apiHeaders() {
        return {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    static apiSecureHeaders() {
        return {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
}