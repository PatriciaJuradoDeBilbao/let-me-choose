import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/restaurants',
            withCredentials: true
        })
    }

    listRestaurants = () => this.service.get('/list')
    detailRestaurant = restaurantId => this.service.get(`/detail/${restaurantId}`)
    addRestaurant = theRestaurant => this.service.post('/new', theRestaurant)
}