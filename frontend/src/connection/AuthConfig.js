export default class AuthConfig {
    static _isAuthenticated = false;
    static _token = null;

    static clear() {
        this._isAuthenticated = false;
        this._token = null;
    }

    static get isAuthenticated() {
        return this._isAuthenticated;
    }

    static set isAuthenticated(value) {
        this._isAuthenticated = value;
    }

    static get token() {
        return this._token;
    }

    static set token(value) {
        this._token = value;
    }
}