import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Profile.css'

const Profile = props => {

    return (
        <>
        <Container as="section" className="profile" fluid>
            <Row as="article" >
                <Col md className="user">
                <img className="avatar-profile" src={props.loggedInUser.avatar} alt={props.loggedInUser.name}/>
                <h1 className="title-user"> ¡Hola, {props.loggedInUser.username}!</h1>
                </Col>
            </Row>
            <Row as="article" className="lists" >
                <Col md={6} className="favs">
                    <h1 className="title-profile">Mis Favoritos<img className="icon-list-profile" src="/images/heart-icon.svg" alt="Heart icon"/></h1>
                    {props.loggedInUser.myFavs.map(favs => <p className="rest"><Link to={`restaurants/detail/${favs._id}`}>
                     {favs.name}
                     <h1 className="title-profile-info">(Comida {favs.type} | Precio {favs.price})</h1>
                     <h1 className="title-profile-info">{favs.loc.street}</h1>
                     <hr/>
                     </Link> </p>)}  

                </Col>
   
                <Col md={6} className="wish">
                    <h1 className="title-profile">Mi WishList<img className="icon-list-profile" src="/images/wish-icon.svg" alt="WishList icon"/></h1>
                    {props.loggedInUser.myWishList.map(wish => <p className="rest"><Link to={`restaurants/detail/${wish._id}`}>
                     {wish.name}
                     <h1 className="title-profile-info">(Comida {wish.type} | Precio {wish.price})</h1>
                     <h1 className="title-profile-info">{wish.loc.street}</h1>
                     <hr/>
                     </Link> </p>)}
                </Col>
                
            </Row>

        </Container>
        </>
    )

}


export default Profile