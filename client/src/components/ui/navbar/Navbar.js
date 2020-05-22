import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import AuthService from './../../../service/auth.service'

import { Link } from 'react-router-dom'



class Navigation extends Component {

    constructor(props) {
        super(props)
        this.authService = new AuthService()
    }

    logout = () => {
        this.props.setTheUser(false)
        this.authService.logout()
    }

    render() {

        return (
            <Navbar className="navbar" expand="md">
                <Navbar.Brand as="div"><Link to="/">
                    <img src="/images/flechas.svg" width="40" height="40" className="d-inline-block align-top logo-navbar" alt="Logo"/>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="navbar-a" as="div"><Link to="/restaurants">Restaurantes</Link></Nav.Link>

                        {
                            !this.props.loggedInUser ?
                                <>
                                    <Nav.Link className="navbar-a" as="div"><Link to="/login">Iniciar sesión</Link></Nav.Link>
                                    <Nav.Link className="navbar-a" as="div"><Link to="/signup">Registro</Link></Nav.Link>
                                </>

                                :
                                <>
                                    <Nav.Link className="navbar-a" as="div"><Link to="/profile">Mi perfil</Link></Nav.Link>
                                    <Nav.Link className="navbar-a" as="div" onClick={this.logout}>Cerrar sesión</Nav.Link>
                                </>

                        }

                    </Nav>
                  
                </Navbar.Collapse>

            </Navbar>
        )
    }

}

export default Navigation