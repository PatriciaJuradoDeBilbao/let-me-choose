// import React, { Component } from 'react'
// import CoasterService from '../../../service/restaurants.service'

// import './Restaurants-list.css'

// import CoasterCard from './RestaurantCard'
// // import CoasterForm from '../coaster-form/CoasterForm'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import Toast from 'react-bootstrap/Toast'
// import Modal from 'react-bootstrap/Modal'


// class CoasterList extends Component {

//     constructor() {
//         super()
//         this.state = {
//             modalShow: false,
//             toast: {
//                 show: false,
//                 text: ''
//             },
//             coasters: []
//         }
    //    this.coasterService = new CoasterService()
//     }


//     handleModal = visible => this.setState({ modalShow: visible })
//     handletoast = (visible, text = '') => {
//         const toastCopy = { ...this.state.toast }
//         toastCopy.show = visible
//         toastCopy.text = text
//         this.setState({ toast: toastCopy })
//     }

//     getAllCoasters = () => {
//         this.coasterService.getCoasters()
//             .then(response => this.setState({ coasters: response.data }))
//             .catch(err => console.log(err))
//     }


//     componentDidMount = () => {
//         this.getAllCoasters()
//     }


//     finishCoasterPost = () => {
//         this.getAllCoasters()
//         this.handleModal(false)
//         this.handletoast(true, 'Registro creado en BBDD')
//     }

//     render() {
//         return (
//             <Container as="section">

//                 <h1>Listado de montañas rusas</h1>

//                 {this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="dark" style={{ marginBottom: '20px' }}>Crear nueva montaña rusa</Button>}

//                 <Row className="coasters-list">
//                     {this.state.coasters.map(elm => <CoasterCard key={elm._id} {...elm} />)}
//                 </Row>


//                 <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
//                     <Modal.Body>
//                         <CoasterForm finishCoasterPost={this.finishCoasterPost} closeModal={() => this.handleModal(false)} />
//                     </Modal.Body>
//                 </Modal>


//                 <Toast onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} autohide>
//                     <Toast.Header>
//                         <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
//                         <strong className="mr-auto">Mensaje</strong>
//                     </Toast.Header>
//                     <Toast.Body>{this.state.toast.text}</Toast.Body>
//                 </Toast>


//             </Container>
//         )
//     }
// }

// export default CoasterList



// MIO

import React, { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import './RestaurantsList.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

class RestaurantList extends Component {

    constructor() {
        super()
        this.state = {
            restaurants: []
        }
        this.restaurantsService = new RestaurantsService()
    }

    getAllRestaurants = () =>  {
        this.restaurantsService.listRestaurants()
            .then(response => this.setState({restaurants: response.data}))
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getAllRestaurants()
    }

    render() {
        return (
            <>
            <Container as="section"> 
            <Row>
                <Col md={{span: 6, offset: 5}}>
                <Link to="/{_id}" className="btn btn-dark btn-choose">Ch<img className="img-logo" src="../flechas.svg" alt="logo"/>se</Link>
                </Col>
            </Row>

            <Row className="restaurants-filter">
            <Col md={4}>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Elige por tipo de comida</Form.Label>
                        <Form.Control as="select" custom>
                        <option>{this.state.restaurants.map(elm => this.state.restaurants.type)}</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
            <Col md={4}>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Elige por rango de precio</Form.Label>
                        <Form.Control as="select" custom>
                        <option></option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
            </Row>

            <Row className="restaurants-list">
                {this.state.restaurants.map(elm => <RestaurantCard key={elm._id} {...elm} />)}

            </Row>
            </Container>
            </>
        )
    }
}

export default RestaurantList