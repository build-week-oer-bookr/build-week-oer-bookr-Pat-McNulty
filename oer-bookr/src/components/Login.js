import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin = e => {
        e.preventDefault();
        const endpoint =
            'https://oer-bookr-api.herokuapp.com/login';
        axios
            .post(endpoint, {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res.data);
                localStorage.setItem("jwt", res.data.token);
                this.props.history.push("/books");
                window.location.reload();
            })
            .catch(err => {
                this.setState({ errorMessage: err.response.data.message });
            });
    };

    render() {
        return (
                <div className='loginFormCont'>
                    <div className='loginForm'>
                        <div className='headerCont'>
                            <h1>Welcome to OER Bookr</h1>
                        </div>
                        <input 
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChanges}
                            required
                        />
                        <input 
                            type='text'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChanges}
                            required
                        />
                        <button onClick={this.handleLogin}>Login</button>
                        <div className='noAccount'>
                            <p>Don't have an account?</p>
                            <Link to='/register'>Click here</Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Login;