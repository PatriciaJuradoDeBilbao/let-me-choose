import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    return (
        <>
        <Container  as="section" className="home" fluid>
        <Row>
            <Col md={6}>
                <h1 className="text-home">Let me choose </h1>
                <p>Si eres de los que pasas horas buscando un lugar donde comer fuera y nunca te decides...</p>
                <p className="text-bold" >¡Estás en el lugar correcto!</p>
                <Link to="/restaurants" className="btn btn-info btn-choose-home">Ver restaurantes</Link>
            </Col>

            <Col md={6}>
                <img className="bg" src="/images/food-sharing.jpeg" alt="Peole sharing food"/>
            </Col>
        </Row>


        </Container>
        
        </>
    )
}

export default Home

