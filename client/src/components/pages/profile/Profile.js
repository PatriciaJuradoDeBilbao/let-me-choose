import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Profile.css'

const Profile = props => {

    return (
        <>
        <Container as="section">
            <Row as="article">
                <Col md={{span: 8, offset:1}}>
                <h1><img className="avatar-profile" src={props.loggedInUser.avatar} alt={props.loggedInUser.name}/> ¡Bienvenid@, {props.loggedInUser.name}!</h1>
                </Col>
            </Row>
                    
            <Row as="article">
                <Col md={{span: 8, offset:1}}>
                    <h1>Favoritos</h1>
                    <hr/>
                </Col>
                <Col md={{span: 8, offset:1}}>
                    <h4>{props.loggedInUser.myFavs}</h4>
                </Col>
            </Row>

            <Row as="article">
                <Col md={{span: 8, offset:1}}>
                    <h1>Quiero ir</h1>
                    <hr/>
                </Col>

                <Col md={{span: 8, offset:1}}>
                    <h4>{props.loggedInUser.myWishList}</h4>
                </Col>
            </Row>
        </Container>
        </>
    )

}


export default Profile