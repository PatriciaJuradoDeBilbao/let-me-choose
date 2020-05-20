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
import GmapMap from '../../Gmap/Gmaps Map/GmapsMap'


class RestaurantDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            restaurantInfo: null
        }

        this.restaurantsService = new RestaurantsService()
    }

    getRestaurantInfo() {
        const id = this.props.match.params.restaurantId
        this.restaurantsService.detailRestaurant(id)
        .then(info=> this.setState({restaurantInfo: info.data}))
        .catch(err => console.log(err))
    }

    deleteComment = id => {
        this.restaurantsService.deleteComment(id)
        .then((info) => this.getRestaurantInfo())
        .catch(err => console.log(err))
    }

    
    handleDelete = id => {
        this.restaurantsService.deleteRestaurant(id)
        .then(() => this.props.history.push('/restaurants'))
        .catch(err => console.log(err))
    }
    
    displayReviews = () => {
        return this.state.restaurantInfo.myReviews.reverse().map(review => <ReviewCard handleDelete={(reviewID)=>this.deleteComment(reviewID)} loggedInUser={this.props.loggedInUser} key={review._id} review={review} />)
    }
    
    averageRating = () => {
        if(this.state.restaurantInfo.myReviews.length === 0) {
            return 0
        }
        return (this.state.restaurantInfo.myReviews.reduce((acc, cu) => {
            return +acc + cu.rating
        }, 0) / this.state.restaurantInfo.myReviews.length).toFixed(1)
    }
    
    submitLike = e => {
        console.log('entro')
        e.preventDefault()
        const like = {user: this.props.loggedInUser._id, restaurant: this.state.restaurantInfo._id}
        this.restaurantsService.likeRestaurant(like)
        .then(() => console.log('done'))
        .catch(err => console.log(err))
    }

    sumbitWish = e => {
        console.log('entro')
        e.preventDefault()
        const wish = {user: this.props.loggedInUser._id, restaurant: this.state.restaurantInfo._id}
        this.restaurantsService.wishRestaurant(wish)
        .then(() => console.log('agregado'))
        .catch(err => console.log(err))

    }

    componentDidMount = () => this.getRestaurantInfo()


    render() {
        console.log(this.state.restaurantInfo)
       if(!this.state.restaurantInfo){
           return <h1>Cargando</h1>
       }else return (
            <Container as="section">

                <Row className="restaurant-detail">

                    <Col md={{span: 8, offset: 1}} className="restaurant-info">
                        <Card>
                            <Card.Img variant="top" className="img-detail" src={this.state.restaurantInfo.imageUrl} />
                            <Card.Body>
                            <Card.Text className="title-card">{this.state.restaurantInfo.name}</Card.Text>
                            <Card.Text className="text-card">Comida {this.state.restaurantInfo.type}</Card.Text>
                            <Card.Text className="text-card">{this.state.restaurantInfo.price}</Card.Text>
                            <Card.Text className="text-card">Ubicación: {this.state.restaurantInfo.loc.street}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                {this.props.loggedInUser &&
                    <Col md={{span: 3, offset: 1}}>
                        
                        <Button className="icons" onClick={this.submitLike}>
                            <img className="icon-list" src="/images/heart-icon.svg" alt="Heart icon"/>
                       </Button>
                       
                        <Button className="icons" onClick={this.sumbitWish} >
                            <img className="icon-list" src="/images/wish-icon.svg" alt="Marker icon"/>
                       </Button>
                       
                        <Button className="icons" onClick={() => this.handleDelete(this.state.restaurantInfo._id)}>
                            <img  className="icon-list" src="/images/delete-icon.svg" alt="Delete icon"/>
                        </Button> 
                    
                    </Col>
                }

                    <Col md={5}>
                        <h5>{this.state.restaurantInfo.myReviews && this.averageRating()}  <img className="img-rating" src="/images/estrella_rating.svg" alt="Star icon" /></h5>  
                    </Col>
                    {this.props.loggedInUser &&  <ReviewForm restaurantID={this.state.restaurantInfo._id} refreshReviewList={()=>this.getRestaurantInfo()}/>}

                    <Col md={{span: 8, offset: 1}}>
                        <hr/>
                        <h3 className="comment-title">Comentarios</h3>
                        <hr/>
                    </Col>
                    
                    {this.state.restaurantInfo.myReviews && this.displayReviews() }
                </Row>
                

                <Link to={`/restaurants`} className="btn btn-info btn-back">Volver</Link>
            </Container>
         
        
        )
    }
}

export default RestaurantDetail 