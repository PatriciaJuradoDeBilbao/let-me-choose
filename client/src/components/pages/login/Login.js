import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginInfo: {
                username: '',
                password: ''
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        let loginInfoCopy = { ...this.state.loginInfo }
        const { name, value } = e.target
        loginInfoCopy = { ...loginInfoCopy, [name]: value }

        this.setState({ loginInfo: loginInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.authService.login(this.state.loginInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/restaurants')
            })
            .catch(err => console.log(err))
    }



    render() {

        return (
            <Container className="containter-login">

                <Row>
                    <Col md={{ span: 7, offset: 2 }} className="login-col">

                        <h3 className="title-login">Inicio de sesión</h3>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control className="input-login" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control className="input-login" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>


                            <Button variant="info" className="btn btn-block btn-login" type="submit">Iniciar sesión</Button>
                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p>
                        </Form>

                        <p className="login-text"><small>¿No tienes cuenta? <Link className="login-a" to="/signup">Regístrate</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Login