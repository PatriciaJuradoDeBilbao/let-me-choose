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
            <Row className="home-row">
                <Col className="home-cols" xs={6} md={{ span: 5, offset: 1 }}>
                    <h1 className="text-home">Let me ch<img className="img-logo" src="/images/flechas.svg" alt="logo" />se </h1>
                    <p>Si eres de los que pasas horas buscando un lugar donde comer fuera y nunca te decides...</p>
                    <p className="text-bold" >¡Estás en el lugar correcto!</p>
                    <Link to="/signup" className="btn-home btn btn-info ">Regístrate</Link>
                    <Link to="/restaurants" className="btn btn-info btn-home">Ver Restaurantes</Link>
                </Col>
                <Col className="home-cols" xs={6}>
                    <img className="home-ilustration" src="/images/home-ilustration.png" alt=""/>
                </Col>

            </Row>
        </Container>
        
        </>
    )
}

export default Home

