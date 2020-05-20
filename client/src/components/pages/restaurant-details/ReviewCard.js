import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
//import restaurantService from '../../../service/restaurants.service'

const ReviewCard = (props) => {
    const {loggedInUser, review, handleDelete} = props
    console.log(props)

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
            
        {loggedInUser && review.creator._id === loggedInUser._id &&
            <Button onClick={()=>handleDelete(review._id)}  className="icons">
                 <img  className="delete-comment" src="/images/delete-icon.svg" alt="Delete icon"/>
            </Button>
}
        
        }
            <hr/>
        </Col>
        </>
    )
}

export default ReviewCard


// import React,{ Component} from 'react'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
// import restaurantService from '../../../service/restaurants.service'

// class ReviewCard extends Component {

//     constructor() {
//         super()
//         this.state = {
//         }
//         this.restaurantService = new restaurantService()
//     }

//     handleDelete = id => {
//         this.restaurantService.deleteComment(id)
//         console.log('hola?')
//         .then(() => this.props.history.push(`/detail/${id}`))
//         .catch(err => console.log(err))
//     }

//     render() {
//         return (
//             <>
//                     <Col md={{span: 8, offset: 1}}>
//         <h6 className="user-info"><img className="avatar" src={review.creator.avatar} alt={review.creator.name}/>{review.creator.username}</h6> 
//         </Col>
//         <Col md={{span: 8, offset: 1}} className="comment">
//             {review.content}
//         </Col>
//         <Col md={{span: 8, offset: 1}} className="rating-info">
//             {review.rating}<img className="img-rating" src="/images/estrella_rating.svg" alt="Star icon" />
            

//             <Button onClick={this.handleDelete()}  className="icons" >
//                 <img  className="delete-comment" src="/images/delete-icon.svg" alt="Delete icon"/>
//             </Button>
            
//             <hr/>
//         </Col>
//             </>
//         )
//     }

// }

// export default ReviewCard
