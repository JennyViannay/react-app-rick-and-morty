import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import validator from 'validator';
import AuthContext from "../../Context/AuthContext";

const Login = () => {
    const history = useHistory();
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleEmail = (e) => {
        if (validator.isEmail(e.target.value)) { setEmail(e.target.value); setError(''); }
        else setError('Enter valid Email!');
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) setError('Tous les champs sont obligatoires')
        const userAuth = { email: email, password: password };
        axios.post('http://localhost:5000/api/login', userAuth)
            .then((response) => response.data)
            .then((data) => {
                if (data.auth) {
                    localStorage.setItem('auth', data.auth)
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('user', data.user.id)
                    setAuthenticated({ auth : data.auth, token: data.token, user : data.user.id })
                    userAuthenticated(data.token)
                    history.push('/')
                } else {
                    setError(data.message)
                }
            }, [])
    }
    
    const userAuthenticated = (token) => {
        console.log(token)
        axios.get('http://localhost:5000/api/isUserAuth', {
            headers: {
                'x-access-token' : token
            },
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="container p-4 rounded h-screen">
            {authenticated.auth ?
                <div className="text-white">
                    Token is {authenticated.token}
                </div>
                :
                <form onSubmit={handleLogin}>
                   {error ?  <p className="alert alert-danger">{error}</p> : ''}
                    <div className="form-group">
                        <label htmlFor="email" className="text-white">Email</label>
                        <input type="email" name="email" id="email" className="form-control" required onChange={handleEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="text-white">Password</label>
                        <input type="password" name="password" id="password" className="form-control" required onChange={handlePassword} />
                    </div>
                    <div className="form-group mt-3 text-center">
                        <button type="submit" className="btn bg-blue-200">Login</button>
                    </div>
                </form>
            }
        </div>
    );
};

export default Login;