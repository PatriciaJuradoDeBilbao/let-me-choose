
import React from 'react'
import Container from 'react-bootstrap/Container'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <>
        <Container className="home">
            <h1 className="text-home">Let me ch<img className="img-logo" src="../flechas.svg" alt="logo"/>se </h1>
            <p>Para todos los indecisos a la hora de comer fuera</p>
            <Link to="/restaurants" className="btn btn-dark btn-choose">Ch<img className="img-logo" src="../flechas.svg" alt="logo"/>se</Link>
        </Container>
        </>
    )
}

export default Home

