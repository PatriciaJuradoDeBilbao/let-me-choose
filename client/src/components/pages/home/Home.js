
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    return (
        <>
        <Container className="home">
            <h1 className="text-home">Let me ch<img className="img-logo" src="../flechas.svg" alt="logo"/>se </h1>
            <p>Para todos los indecisos a la hora de comer fuera</p>
            <Row>
                <Col md={{span: 6, offset: 5}}>
                <Link to="/restaurants" className="btn btn-dark btn-choose">Ch<img className="img-logo" src="../flechas.svg" alt="logo"/>se</Link>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home

