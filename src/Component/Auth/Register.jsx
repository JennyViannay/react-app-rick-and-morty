import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import validator from "validator";
import AuthContext from "../../Context/AuthContext";

const Register = () => {
  const history = useHistory();
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const handleEmail = (e) => {
    if (validator.isEmail(e.target.value)) { setEmail(e.target.value); setError(''); }
    else setError('Enter valid Email!');
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const checkPassword = (e) => {
    if (password !== e.target.value) setError('Password doesn\'t match !')
    else setError(''); setPasswordCheck(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !passwordCheck) setError('Tous les champs sont obligatoires')
    const newUser = { email: email, password: password };
    axios.post('http://localhost:5000/api/register', newUser)
      .then((response) => response.data)
      .then((data) => {
        if (data.message) setError(data.message)
        else {
          localStorage.setItem('auth', data.auth);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', data.user);
          setAuthenticated({ auth: data.auth, token: data.token, user: data.user });
          history.push('/');
        }
      }, [])
  }

  return (
    <div className="container mt-5 h-screen">
      {authenticated.user ?
        <>
          <p>Already Logged as userId: {authenticated.user} <br /><a href="/" className="text-blue-800 underline font-bold">Go back</a></p>
        </>
        :
        <>
          <h1 className="text-3xl text-center my-4">Register</h1>
          <Form onSubmit={handleRegister}>
            {error ? <p className="alert alert-danger">{error}</p> : ''}
            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="example@mail.com" name="email" onChange={handleEmail} required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="password">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" name="password" required onChange={handlePassword} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="password-check">
              <Form.Label column sm="2">
                Password Check
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password-check" name="password-check" required onChange={checkPassword} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="password-check">
              <Col sm="12" className="text-center">
                <button type="submit" className="btn bg-blue-200">Register</button>
              </Col>
            </Form.Group>
          </Form>
        </>}

    </div>
  );
};

export default Register;