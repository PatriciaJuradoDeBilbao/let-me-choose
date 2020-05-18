import React, { Component} from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import restaurantService from '../../../service/restaurants.service'
class ReviewForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: '',
            rating: '',
            // creator: this.props.loggedInUser._id
        }
        this.restaurantService = new restaurantService()
    }

    
    handleInputChange = e => {
        const { name, value } = e.target
        
        this.setState({
            [name]: value
        })
    }
    finishAction = () => {
        this.props.refreshReviewList()
    }
    handleSubmit = e => {
        e.preventDefault()
        this.restaurantService.addComment(this.state)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <Col md={{span: 8, offset: 1}}>
                <Form className="comment-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="Escribe tu comentario aquí" as="textarea" rows="3" name="content" value={this.state.content} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Escoge una puntuación del 1 al 5</Form.Label>
                        <Form.Control as="select" name="rating" value={this.state.rating} onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="info" type="submit" className="btn-comment btn-block">Añadir comentario</Button>
                    </Form>
            </Col>
            </>
        )
    }

}

export default ReviewForm