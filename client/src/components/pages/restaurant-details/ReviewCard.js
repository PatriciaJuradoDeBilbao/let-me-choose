import React from 'react'
// import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'

const ReviewCard = review => {

    return (
        <>
            <Col md={{span: 8, offset: 1}}>

                {review.rating} {review.content}
            </Col>
        </>
    )
}

export default ReviewCard



