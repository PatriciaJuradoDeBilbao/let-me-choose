import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/restaurants`,
            withCredentials: true
        })
    }

    listRestaurants = () => this.service.get('/list')
    detailRestaurant = restaurantId => this.service.get(`/detail/${restaurantId}`)
    addRestaurant = theRestaurant => this.service.post('/new', theRestaurant)
    deleteRestaurant = restaurantId => this.service.get(`/delete/${restaurantId}`)

    
    addComment = theComment => this.service.post('/newComment', theComment)
    deleteComment = theComment => this.service.post(`/deleteComment/${theComment}`) // NO FUNCIONA 
    likeRestaurant = like => this.service.post('/likeRestaurant', like)
    wishRestaurant = wish => this.service.post('/wishRestaurant', wish)
    
}

