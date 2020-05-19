import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ReviewCard = review => {



    return (
        <>
        <Col md={{span: 8, offset: 1}}>
        <h6 className="user-info"><img className="avatar" src={review.creator.avatar} alt={review.creator.name}/>{review.creator.username}</h6> 
        </Col>
        <Col md={{span: 8, offset: 1}} className="comment">
            {review.content}
        </Col>
        <Col md={{span: 8, offset: 1}} className="rating-info">
            {review.rating}<img className="img-rating" src="/images/estrella_rating.svg" alt="Star icon" />

            <Button className="icons" >
                <img  className="delete-comment" src="/images/delete-icon.svg" alt="Delete icon"/>
            </Button>
            <hr/>
        </Col>
        </>
    )
}

export default ReviewCard



// DELETE OPTION - esta me dice que review no existe 

// import React, { Component} from 'react'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import restaurantService from '../../../service/restaurants.service'

// class ReviewCard extends Component {

//     constructor(review) {
//         super(review)
//         this.state = {
//             restaurantInfo: {}
//         }
//         this.restaurantService = new restaurantService()
//     }


//     handleDelete = id => {
//         this.restaurantsService.deleteComment(id)
//         .then(() => this.props.history.push(`restaurants/detail/${review._id}`))
//         .catch(err => console.log(err))
//     }

    
//     render() {
//         return (
//             <>
//             <Col md={{span: 8, offset: 1}}>
//                 <h6 className="user-info"><img className="avatar" src={review.creator.avatar} alt={review.creator.name}/>{review.creator.username}</h6> 
//             </Col>

//             <Col md={{span: 8, offset: 1}} className="comment">
//                     {review.content}
//             </Col>
//             <Col md={{span: 8, offset: 1}} className="rating-info">
//                 {review.rating}<img className="img-rating" src="/images/estrella_rating.svg" alt="Star icon" />
                

//                 <Button className="icons" >
//                     <img  className="delete-comment" src="/images/delete-icon.svg" alt="Delete icon"/>
//                 </Button>

//                 <hr/>
//             </Col>
//             </>
//         )
//     }

// }

// export default ReviewCard
