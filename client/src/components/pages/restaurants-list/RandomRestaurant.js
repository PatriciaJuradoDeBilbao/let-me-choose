// import React from 'react'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'

// const RandomRestaurant = props => {

//     return (
//         <>
//         <Col lg={3} md={4}>
//             <Card as="article" className="shadow-sm mb-5 bg-white rounded">
//                 <Card.Img variant="top" src={props.imageUrl} />
//                 <Card.Body>
//                     <Card.Title as="h3">{props.name}</Card.Title>
//                     <Card.Title>Comida {props.type}</Card.Title>
//                     <Card.Title>{props.price}</Card.Title>
//                     <Card.Title>{props.direction}</Card.Title>
//                 </Card.Body>
//             </Card>
//         </Col>

//         </>
//     )
// }

// export default RandomRestaurant



import React,{ Component} from 'react'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
import RestaurantsService from '../../../service/restaurants.service'

class RandomRestaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurants: []
        }
        this.restaurantsService = new RestaurantsService()
    }
    
    getRestaurantInfo() {
        const id = this.props.match.params.restaurantId
        return this.restaurantsService.detailRestaurant(id)
    }
    randomRestaurant = () => {
        this.restaurantsService.listRestaurants.map(Math.floor(Math.random() * this.restaurants.length))
    }

    render() {
        return (
            <>
            {}
            {/* <Col lg={3} md={4}>
                <Card as="article" className="shadow-sm mb-5 bg-white rounded">
                    <Card.Img variant="top" src={this.restaurants.imageUrl} />
                    <Card.Body>
                        <Card.Title as="h3">{this.restaurants.name}</Card.Title>
                        <Card.Title>Comida {this.restaurants.type}</Card.Title>
                        <Card.Title>{this.restaurants.price}</Card.Title>
                        <Card.Title>{this.restaurants.direction}</Card.Title>
                    </Card.Body>
                </Card>
            </Col> */}
            <h1>hola</h1>
            </>
        )
    }

}

export default RandomRestaurant
