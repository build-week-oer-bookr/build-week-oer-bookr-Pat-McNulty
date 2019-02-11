import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
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
            })
            .catch(err => {
                this.setState({ errorMessage: err.response.data.message });
            });
    };

    render() {
        return (
            <div>
                <div className='loginFormCont'>
                    <div className='loginForm'>
                        <input 
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.props.handleChanges}
                            required
                        />
                        <input 
                            type='text'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.props.handleChanges}
                            required
                        />
                        <button onClick={this.handleLogin}>Login</button>
                        <Link to='/register'>Don't have an account? Click here</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;