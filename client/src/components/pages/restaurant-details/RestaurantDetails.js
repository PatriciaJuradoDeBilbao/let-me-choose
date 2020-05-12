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
import './RestaurantDetails.css'

class RestaurantDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { 

        }
        this.restaurantsService = new RestaurantsService()
    }

    getRestaurantInfo() {
        const id = this.props.match.params.restaurantId
        this.restaurantsService.detailRestaurant(id)
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getRestaurantInfo()
        
    }


    render() {
        return (
            <>
            <Container as="section">
            <h1>Más detalles sobre: {this.state.name}</h1> 
            <Row className="restaurant-detail">

                <Col md={{span: 4, offset: 1}} className="restaurant-info">
                    <h2>{this.state.name}</h2> 
                    <h3>Comida {this.state.type}</h3>
                    <h3>Rango de precio: {this.state.price}</h3>
                    <h3>Dirección: {this.state.direction}</h3>
                </Col>
                <Col md={6}>
                    <img src={this.state.imageUrl} alt={this.state.name}></img>
                </Col>
                {/* <h1>
                {this.setState.data.myReviews[0].content}

                </h1> */}
            </Row>
            </Container>
            </>
        )
    }
}

export default RestaurantDetail