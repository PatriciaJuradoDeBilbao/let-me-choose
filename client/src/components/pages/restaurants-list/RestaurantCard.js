import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const RestaurantCard = props => {

    return (
        <>
        <Col lg={3} md={4}>
            <Card as="article" className=" card-rest">
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title as="h3">{props.name}</Card.Title>
                    <Card.Title>Comida {props.type}</Card.Title>
                    <Card.Title>{props.price}</Card.Title>
                    <Link to={`restaurants/detail/${props._id}`} className="btn btn-detail">Ver detalles</Link> 
                </Card.Body>
            </Card>
        </Col>

        </>
    )
}

export default RestaurantCard



