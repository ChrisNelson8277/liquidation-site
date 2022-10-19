import React, { useState } from 'react'
import {Card, Button, Form, Alert, Container} from 'react-bootstrap'
import { Ref, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
// import AuthProvider from '../contexts/AuthContext'



function Login(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()
    let navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate("/adminPanel")
        } catch {
            setError('Failed to Login, Wrong E-mail or password')
        }
        setLoading(false)
    }
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
    <div className='w-100' style={{ maxWidth: "400px"}}>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} type="submit" className='w-75'  style={{
                minHeight: "5vh"
            }}><h3>Login</h3></Button>
                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2'>
            <h3>
                Admin Tool
                </h3>
        </div>
        </Card>
        </div>
        </Container>
  )
}

export default Login