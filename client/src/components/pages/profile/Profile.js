import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Profile.css'

const Profile = props => {
console.log(props)
    return (
        <>
        <Container as="section">
            <Row as="article">
                <Col md={{span: 8, offset:1}}>
                <h1><img className="avatar-profile" src={props.loggedInUser.avatar} alt={props.loggedInUser.name}/> ¡Bienvenid@, {props.loggedInUser.username}!</h1>
                </Col>
            </Row>
                    
            <Row as="article">
                <Col md={{span: 8, offset:1}}>
                    <h1>Favoritos</h1>
                    <hr/>
                </Col>
                <Col md={{span: 8, offset:1}}>
                    <h4>{props.loggedInUser.myFavs.map(favs => <p>{favs.name}</p>)}</h4>
                </Col>
            </Row>

            <Row as="article">
                <Col md={{span: 8, offset:1}}>
                    <h1>Quiero ir</h1>
                    <hr/>
                </Col>

                <Col md={{span: 8, offset:1}}>
                    <h4>{props.loggedInUser.myWishList.map(wish => <p>{wish.name}</p>)}</h4>
                </Col>
            </Row>
        </Container>
        </>
    )

}


export default Profile