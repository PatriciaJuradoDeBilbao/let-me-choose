import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    return (
        <>
        <Container  as="section" className="home" fluid>
            <h1 className="text-home">Let me choose </h1>
            <p>Si eres de los que pasas horas buscando un lugar donde comer fuera y nunca te decides...</p>
            <p className="text-bold" >¡Estás en el lugar correcto!</p>
            <Link to="/restaurants" className="btn btn-info btn-choose-home">Conoce más</Link>
        </Container>
        
        </>
    )
}

export default Home

