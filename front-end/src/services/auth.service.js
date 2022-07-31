import http from "../../http-common";

class AuthDataService {
    login(username, password) {
        const res = await http.post(API_URL + 'sign in', { username, password });
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    }
    logout() {
        localStorage.removeItem('user');
    }
}
export default new AuthDataService;