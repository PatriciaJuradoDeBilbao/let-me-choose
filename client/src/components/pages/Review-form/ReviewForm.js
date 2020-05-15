import React, { Component} from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import restaurantService from '../../../service/restaurants.service'
class ReviewForm extends Component {

    constructor() {
        super()
        this.state = {
            content: '',
            rating: '',
        }
        this.restaurantService = new restaurantService()
    }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.restaurantService.saveCoaster(this.state)
    //         .then(() => this.props.finishCoasterPost())
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <>
            <Col md={{span: 8, offset: 1}}>
                <Form className="comment-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Comentario</Form.Label> */}
                        <Form.Control placeholder="Escribe tu comentario aquí" as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Escoge una puntuación del 1 al 5</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="info" type="submit">Añadir comentario</Button>
                    </Form>
            </Col>
            </>
        )
    }

}

export default ReviewForm