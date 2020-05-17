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
import { Link } from 'react-router-dom'
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
            restaurants: []
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
            .then(response => this.setState({restaurants: response.data}))
            .catch(err => console.log(err))
    }


    // randomRestaurant = () => {
    //     this.restaurantsService.listRestaurants.map(Math.floor(Math.random() * this.restaurants.length))
    // }

    componentDidMount = () => {
        this.getAllRestaurants()
    }

    finishRestaurantPost = () => {
        this.handleModal(false)
        this.getAllRestaurants()
        this.handleToast(true, 'Restaurante añadido correctamente')
    }

    render() {
        return (
            <>
            <Container as="section"> 
                <Row className="restaurants-filter">
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Elige por tipo de comida</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Italiana</option>
                                <option>Asiática</option>
                                <option>Venezolana</option>
                                <option>India</option>
                                <option>Mexicana</option>
                                <option>Mediterránea</option>
                                <option>Saludable</option>
                                <option>Árabe</option>
                                <option>Americana</option>
                                <option>Vegetariana</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Elige por rango de precio</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Asequible(€)</option>
                                <option>Moderado(€€)</option>
                                <option>Caro(€€€)</option>
                                <option>Muy caro(€€€€)</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Tus listas</Form.Label>
                            <Form.Control as="select" custom>
                            <option></option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                </Row>

                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <Link to={`restaurants/choice`} className="btn btn-info btn-choose btn-block">Ch<img className="img-logo" src="/images/flechas.svg" alt="logo" />se  </Link>
                    </Col>
                </Row>

                <Row className="restaurants-list">
                    {this.state.restaurants.map(elm => <RestaurantCard key={elm._id} {...elm} />)}

                </Row>
                <Row>
                    <Col md={{span: 8, offset: 2}} className="add-rest">
                    <h6>¿Eres el dueño de un restaurante?</h6>
                        <Button onClick={() => this.handleModal(true)} variant="info" type="submit" className="btn-lg btn-add">Añadir tu restaurante</Button>
                    </Col>
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