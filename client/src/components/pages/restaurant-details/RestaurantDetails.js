import React, { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ReviewCard from './ReviewCard'
import './RestaurantDetails.css'
import ReviewForm from '../Review-form/ReviewForm'


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

    handleNewReview() {
        this.getRestaurantInfo()
        .then(response => this.setState({
            restaurantInfo: response.data
        }))
        .catch(err => console.log(err))
    }
    
    handleDelete = id => {
        this.restaurantsService.deleteRestaurant(id)
        .then(() => this.props.history.push('/restaurants'))
        .catch(err => console.log(err))
    }
    
    displayReviews = () => {
        return this.state.restaurantInfo.myReviews.map(review => <ReviewCard key={review._id} newReviewAdded={()=>this.handleNewReview()} {...review}/>)
    }
    
    averageRating = () => {
        return this.state.restaurantInfo.myReviews.reduce((acc, cu) => {
            return +acc + cu.rating
        }, 0) / this.state.restaurantInfo.myReviews.length 
    }
    
    componentDidMount = () => {
        this.getRestaurantInfo()
        .then(response => this.setState({
            restaurantInfo: response.data
        }))
        .catch(err => console.log(err))
    }



    render() {
        return (
            <>
            <Container as="section">

                <Row className="restaurant-detail">

                    <Col md={{span: 8, offset: 1}} className="restaurant-info">
                        <Card>
                            <Card.Body>
                            <Card.Text className="title-card">{this.state.restaurantInfo.name}</Card.Text>
                            <Card.Text className="text-card">Comida {this.state.restaurantInfo.type}</Card.Text>
                            <Card.Text className="text-card">{this.state.restaurantInfo.price}</Card.Text>
                            <Card.Text className="text-card">Dirección: {this.state.restaurantInfo.direction}</Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={this.state.restaurantInfo.imageUrl} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md={{span: 3, offset: 1}}>
                        
                        <Button >
                            <img className="icon-list" src="/images/heart-icon.svg" alt="Heart icon"/>
                       </Button>
                       
                        <Button >
                            <img className="icon-list" src="/images/wish-icon.svg" alt="Marker icon"/>
                       </Button>
                       

                        <Button onClick={() => this.handleDelete(this.state.restaurantInfo._id)}>
                            <img  className="icon-list" src="/images/delete-icon.svg" alt="Delete icon"/>
                        </Button>

                    
                    </Col>
                    <Col md={{span: 4, offset: 1}}>
                        <h5>{this.state.restaurantInfo.myReviews && this.averageRating()}  <img className="img-rating" src="/images/estrella_rating.svg" alt="Star icon" /></h5>  
                    </Col>

                    <ReviewForm  refreshReviewList={this.getRestaurantInfo}/>

                    <Col md={{span: 8, offset: 1}}>
                        <hr/>
                        <h3 className="comment-title">Comentarios</h3>
                        <hr/>
                    </Col>
 
                    {this.state.restaurantInfo.myReviews && this.displayReviews()}
                </Row>
                

                <Link to={`/restaurants`} className="btn btn-info btn-back">Volver</Link>
            </Container>
            </>
        )
    }
}

export default RestaurantDetail