import React, { Component } from 'react'
import RestaurantsService from '../../../service/restaurants.service'
import FileService from '../../../service/file.service'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './RestaurantForm.css'

class RestaurantForm extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            imageUrl: '',
            name: '',
            type: '',
            price: '',
            loc: {coordinates: [], street:''},
            creator: ''
        }
        this.restaurantsService = new RestaurantsService()
        this.filesService = new FileService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        if(name === "street"){
            this.setState({loc:{street: value}})
        }else{
        this.setState({
            [name]: value
        })
    }
    }


    handleSubmit = e => {
        e.preventDefault()
        this.restaurantsService.addRestaurant(this.state)
        .then(() => this.props.finishRestaurantPost())
        .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])
        this.filesService.handleUpload(uploadData)
        .then(response => {
            console.log('El archivo ya se ha subido. La URL de cloudinary es: ', response.data.secure_url)
            this.setState({
                ...this.state, imageUrl: response.data.secure_url
            })
        })
        .catch(err => console.log(err))
    }   

    render() {

        return (
        <>
            <Container className="restaurant-form">
            <Button variant="primary" onClick={() => this.props.closeModal()} className="btn-close"><img src="/images/close-icon.svg" alt="Close icon"/></Button>

                <h1 className="title">Añade tu restaurante</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload}/>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control  name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="type">
                        <Form.Label>Tipo de comida</Form.Label>
                        <Form.Control as="select" name="type" value={this.state.type} onChange={this.handleInputChange}>
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
                    <Form.Group controlId="price">
                        <Form.Label>Rango de precios</Form.Label>
                        <Form.Control as="select" name="price" value={this.state.price} onChange={this.handleInputChange}>
                        <option>Asequible(€)</option>
                        <option>Moderado(€€)</option>
                        <option>Caro(€€€)</option>
                        <option>Muy caro(€€€€)</option>
                        </Form.Control>
                    </Form.Group>
                 
                {this.state.loc && 
                        <Form.Group controlId="location">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control  name="street" type="text" placeholder="Calle" value={this.state.loc.street} onChange={this.handleInputChange}/>
                        {/* <Form.Control  name="lat" type="text" placeholder="latitud" value={this.state.loc.coordinates[0]} onChange={this.handleInputChange}/>
                        <Form.Control  name="lng" placeholder="longitud" type="text" value={this.state.loc.coordinates[1]} onChange={this.handleInputChange}/> */}
                        </Form.Group>
                    }
                
                    <Button variant="primary" type="submit" className="btn btn-block btn-login">Añadir</Button>
                </Form>
            </Container>
        </>
        )
    }
}

export default RestaurantForm