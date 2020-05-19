import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import FileService from '../../../service/file.service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginInfo: {
                name: '',
                username: '',
                email: '',
                password: '',
                avatar: ''
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
        this.filesService = new FileService()
    }


    handleInputChange = e => {

        let loginInfoCopy = { ...this.state.loginInfo }
        const { name, value } = e.target
        loginInfoCopy = { ...loginInfoCopy, [name]: value }

        this.setState({ loginInfo: loginInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.authService.signup(this.state.loginInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/profile')
            })
            .catch(err => {
                err.response.status === 400 && this.setState({ errorMessage: err.response.data.message })
            })
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append('avatar', e.target.files[0])
        this.filesService.handleUploadAvatar(uploadData)
        .then(response => {
            console.log('El archivo ya se ha subido. La URL de cloudinary es: ', response.data.secure_url)
            let loginInfoCopy = {...this.state.loginInfo}
            loginInfoCopy = {...loginInfoCopy, avatar: response.data.secure_url}
            this.setState({
                loginInfo: loginInfoCopy
            })
        })
        .catch(err => console.log(err))
    } 

    render() {

        return (
            <Container className="container-signup">

                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="signup">

                        <h3 className="title-signup">Registro de usuario</h3>
                        <Form className="form-signup" onSubmit={this.handleSubmit}>

                            <Form.Group controlId="avatar">
                                <Form.Label>Foto de perfil</Form.Label>
                                <Form.Control name="avatar" type="file" onChange={this.handleFileUpload} />
                            </Form.Group>
                            <Form.Group  controlId="name">
                                <Form.Label >Nombre</Form.Label>
                                <Form.Control className="input-signup" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Button variant="info" className="btn btn-block btn-signup" type="submit">Registrarme</Button>
                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p>
                        </Form>

                        <p className="signup-text"><small>¿Ya tienes cuenta? <Link className="signup-a" to="/login">Inicia sesión</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Signup