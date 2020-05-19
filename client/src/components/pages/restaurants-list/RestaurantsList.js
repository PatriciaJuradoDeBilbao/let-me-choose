import React, { Component } from 'react'
import './RestaurantsList.css'
import RestaurantsService from '../../../service/restaurants.service'
import RestaurantForm from '../Restaurant-form/RestaurantForm'
import Container from 'react-bootstrap/Container'
import RestaurantCard from './RestaurantCard'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



class RestaurantList extends Component {

    constructor() {
        super()
        this.state = {
            modalShow: false,
            toast: {
                show: false,
                text: ''
            },
            restaurants: [],
            filteredRestaurants: [],
            typeValue: '',
            priceValue: '',
            listsValue: '',
            randomChoice: {}
        }
        this.restaurantsService = new RestaurantsService()
    }

    handleModal = visible => this.setState({ modalShow: visible})

    handleToast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }

    getAllRestaurants = () =>  {
        this.restaurantsService.listRestaurants()
            .then(response => this.setState({restaurants: response.data, filteredRestaurants: response.data}))
            .catch(err => console.log(err))
    }


    componentDidMount = () => this.getAllRestaurants()
    

    finishRestaurantPost = () => {
        this.handleModal(false)
        this.getAllRestaurants()
        this.handleToast(true, 'Restaurante añadido correctamente')
    }

    handleFilterByType = e => {
        const value = e.currentTarget.value
        this.setState({typeValue: value}, () => this.filterSearch())

    }

    handleFilterByPrice = e => {
        const value = e.currentTarget.value
        this.setState({priceValue: value}, () => this.filterSearch())
    }

    handleFilterByList = e => {
        const value = e.currentTarget.value
        this.setState({listsValue: value}, () => this.filterSearch())
    }

    filterSearch = () => {
        const restaurantsToShow = this.state.restaurants
            .filter(restaurant =>
             restaurant.type.includes(this.state.typeValue))
            .filter(restaurant => restaurant.price.includes(this.state.priceValue))

        this.setState({filteredRestaurants: restaurantsToShow})
    }

    randomRestaurant = () => {
            const random = Math.floor(Math.random() * this.state.filteredRestaurants.length)
            const choice = this.state.filteredRestaurants[random]
            this.props.history.push(`restaurants/detail/${choice._id}`)
    }

    displayRestaurants = () => this.state.filteredRestaurants.map(elm => <RestaurantCard key={elm._id} {...elm} />)
    

    render() {

        return (
            <>
            <Container as="section"> 
                <Row className="restaurants-filter">
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>¿Qué te apetece comer?</Form.Label>
                            <Form.Control onChange={this.handleFilterByType} as="select" custom>
                                <option >Elige un tipo de comida</option>
                                <option value="Italiana">Italiana</option>
                                <option value="Asiática">Asiática</option>
                                <option value="Venezolana">Venezolana</option>
                                <option value="India">India</option>
                                <option value="Mexicana">Mexicana</option>
                                <option value="Mediterránea">Mediterránea</option>
                                <option value="Saludable">Saludable</option>
                                <option value="Árabe">Árabe</option>
                                <option value="Americana">Americana</option>
                                <option value="Vegetariana">Vegetariana</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>¿Cuánto quieres gastar?</Form.Label>
                            <Form.Control onChange={this.handleFilterByPrice} as="select" custom>
                                <option>Elige un rango de precio</option>
                                <option value="Asequible(€)">Asequible(€)</option>
                                <option value="Moderado(€€)">Moderado(€€)</option>
                                <option value="Caro(€€€)">Caro(€€€)</option>
                                <option value="Muy caro(€€€€)">Muy caro(€€€€)</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Tus listas</Form.Label>
                            <Form.Control onChange={this.handleFilterByList} as="select" custom>
                            <option>Elige una de tus listas</option>
                            <option value="myFavs">Mis Favoritos</option>
                            <option value="myWishList">Mi WishList</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                </Row>

                <Row>
                    <Col md={{span: 8, offset: 2}}> 
                       <Button  onClick={() => this.randomRestaurant()} className="btn btn-info btn-choose btn-block">Ch<img className="img-logo" src="/images/flechas.svg" alt="logo" />se </Button>
                    </Col>
                </Row>

                <Row className="restaurants-list">
                         {this.displayRestaurants()}
                </Row>
                
                <Row>
                {this.props.loggedInUser &&
                    <Col md={{span: 8, offset: 2}} className="add-rest">
                    <h6>¿Eres el dueño de un restaurante?</h6>
                        <Button onClick={() => this.handleModal(true)} variant="info" type="submit" className="btn-lg btn-add">Añadir tu restaurante</Button>
                    </Col>
                }
                </Row>

                <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <RestaurantForm finishRestaurantPost={this.finishRestaurantPost} closeModal={() => this.handleModal(false)}/>
                    </Modal.Body>
                </Modal>


                <Toast onClose={() => this.handleToast(false)} show={this.state.toast.show} delay={3000} autohide>
                    <Toast.Header><strong className="mr-auto">Mensaje</strong></Toast.Header>
                    <Toast.Body>{this.state.toast.text}</Toast.Body>
                </Toast>

                
            </Container>
            </>
        )
    }
}

export default RestaurantList