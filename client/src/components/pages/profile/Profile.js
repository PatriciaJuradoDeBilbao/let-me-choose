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
                    <h1 className="title-profile">Mis Favoritos</h1>
                    {props.loggedInUser.myFavs.map(favs => <p className="rest"><Link to={`restaurants/detail/${favs._id}`}> {favs.name}</Link> </p>)}  

                </Col>
   
                <Col md={6} className="wish">
                    <h1 className="title-profile">Mi WishList</h1>

                    {props.loggedInUser.myWishList.map(wish => <p className="rest"><Link to={`restaurants/detail/${wish._id}`}> {wish.name}</Link> </p>)}
                </Col>
                
            </Row>

        </Container>
        </>
    )

}


export default Profile