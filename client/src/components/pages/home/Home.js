
import React from 'react'
import Container from 'react-bootstrap/Container'
import './Home.css'

const Home = () => {

    return (
        <>
        <Container className="home">
            <h1 className="text-home">Let me ch<img className="img-logo" src="../flechas.svg" alt="logo"/>se </h1>
            <p>Para todos los indecisos a la hora de comer fuera</p>
            
        </Container>
        </>
    )
}

export default Home

