import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`,
            withCredentials: true
        })
    }

    signup = ({ name, email, username, password }) => this.service.post('/signup', { name, email, username, password })
    login = ({ username, password }) => this.service.post('/login', { username, password })
    logout = () => this.service.post('/logout')
    isLoggedIn = () => this.service.get('/loggedin')
}