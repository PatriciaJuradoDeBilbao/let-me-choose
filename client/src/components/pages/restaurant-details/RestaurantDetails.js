// import React, { Component } from 'react'
// import CoasterService from '../../../service/coasters.service'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// import './CoasterDetails.css'

// import { Link } from 'react-router-dom'

// class CoasterDetails extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {}
//         this.coasterService = new CoasterService()
//     }


//     getCoasterInfo() {
//         const id = this.props.match.params.coasterId
//         this.coasterService.getCoaster(id)
//             .then(response => this.setState(response.data))
//             .catch(err => console.log(err))
//     }


//     componentDidMount = () => {
//         this.getCoasterInfo()
//     }

//     render() {
//         return (
//             <Container as="section" className="coaster-details">
//                 <h1>{this.state.title}</h1>
//                 <hr />
//                 <Row>
//                     <Col md={{ span: 4, offset: 1 }}>
//                         <h4>Info</h4>
//                         <p>{this.state.description}</p>
//                         <h4>Detalles técnicos</h4>
//                         <ul>
//                             <li>Longitud: {this.state.length}</li>
//                             <li>Inversiones: {this.state.inversions}</li>
//                         </ul>
//                     </Col>
//                     <Col md={6}>
//                         <img src={this.state.imageUrl} alt={this.state.title}></img>
//                     </Col>
//                 </Row>
//                 <Link to="/coasters" className="btn btn-dark">Volver</Link>
//             </Container>
//         )
//     }
// }

// export default CoasterDetails


// ---- MIO --------

import React, { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './RestaurantDetails.css'
import ReviewCard from './ReviewCard'

class RestaurantDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            restaurantInfo: {}
        }
        this.restaurantsService = new RestaurantsService()
    }

    getRestaurantInfo() {
        const id = this.props.match.params.restaurantId
        return this.restaurantsService.detailRestaurant(id)
        
    }

    displayReviews = () => {
        return this.state.restaurantInfo.myReviews.map(review => <ReviewCard key={review} {...review}/>)

    }


    componentDidMount = () => {
        this.getRestaurantInfo()
        .then(response => this.setState({
            restaurantInfo: response.data
        }))
        .catch(err => console.log(err))
    }

    

    render() {
        const {name, type, price, direction, imageUrl, myReviews} = this.state.restaurantInfo
        return (
            <>
            <Container as="section">
            <Row className="restaurant-detail">

                <Col md={{span: 8, offset: 1}} className="restaurant-info">
                    <Card>
                        <Card.Body>
                        <Card.Text className="title-card">{name}</Card.Text>
                        <Card.Text className="text-card">Comida {type}</Card.Text>
                        <Card.Text className="text-card">Rango de precio: {price}</Card.Text>
                        <Card.Text className="text-card">Dirección: {direction}</Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src={imageUrl} />
                    </Card>
                </Col>
            </Row>
            <Row>
                {myReviews && this.displayReviews()}
            </Row>

            
            </Container>

            </>
        )
    }
}

export default RestaurantDetail