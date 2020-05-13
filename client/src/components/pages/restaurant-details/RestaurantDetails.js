import React, { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ReviewCard from './ReviewCard'
import './RestaurantDetails.css'

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
        return this.state.restaurantInfo.myReviews.map(review => <ReviewCard key={review._id}{...review}/>)
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
                            <Card.Text className="text-card">{price}</Card.Text>
                            <Card.Text className="text-card">Dirección: {direction}</Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={imageUrl} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md={{span: 8, offset: 1}}>
                        <h5>  <img className="img-rating" src="../../../../estrella_rating.svg" alt="Star icon" /></h5>  
                    </Col>
                    <Col md={{span: 8, offset: 1}}>
                        <hr/>
                        <h3 className="comment-title">Comentarios</h3>
                        <hr/>
                    </Col>
                    {myReviews && this.displayReviews()}
                </Row>
                <Link to={`/restaurants`} className="btn btn-info btn-back">Volver atrás</Link>
            </Container>
            </>
        )
    }
}

export default RestaurantDetail