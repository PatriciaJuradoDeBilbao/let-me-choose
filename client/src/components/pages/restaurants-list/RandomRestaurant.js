// import React,{ Component} from 'react'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
// import RestaurantsService from '../../../service/restaurants.service'

// class RandomRestaurant extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             randomRestaurant: props.randomRestaurant
//         }
//         this.restaurantsService = new RestaurantsService()
//     }
    
//     render() {

//         return (
//             <>
//             <Col lg={3} md={4}>
//                 <Card as="article" className="shadow-sm mb-5 bg-white rounded">
//                     <Card.Img variant="top" src={this.state.randomRestaurant.imageUrl} />
//                     <Card.Body>
//                         <Card.Title as="h3">{this.state.randomRestaurant.name}</Card.Title>
//                         <Card.Title>Comida {this.state.randomRestaurant.type}</Card.Title>
//                         <Card.Title>{this.state.randomRestaurant.price}</Card.Title>
//                         <Card.Title>{this.state.randomRestaurant.direction}</Card.Title>
//                     </Card.Body>
//                 </Card>
//             </Col>
//             </>
//         )
//     }

// }

// export default RandomRestaurant