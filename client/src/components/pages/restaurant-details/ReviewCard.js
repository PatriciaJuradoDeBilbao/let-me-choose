import React from 'react'
import Col from 'react-bootstrap/Col'

const ReviewCard = review => {


    return (
        <>
        <Col md={{span: 8, offset: 1}}>
        <h6 className="user-info"><img className="avatar" src={review.creator.avatar} alt={review.creator.name}/>{review.creator.name}</h6> 
        </Col>
        <Col md={{span: 8, offset: 1}} className="comment">
            {review.content}
        </Col>
        <Col md={{span: 8, offset: 1}} className="rating-info">
            {review.rating}<img className="img-rating" src="/images/estrella_rating.svg" alt="Star icon" />
            <hr/>
        </Col>
        </>
    )
}

export default ReviewCard



