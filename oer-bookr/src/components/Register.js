import React from 'react';
import axios from 'axios';

class Register extends React.Component {
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

    handleRegister = e => {
        e.preventDefault();
        const endpoint =
            'https://oer-bookr-api.herokuapp.com/register';
        axios
            .post(endpoint, {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res.data);
                localStorage.setItem("jwt", res.data.token);
                this.props.history.push("/");
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
                        <button onClick={this.handleRegister}>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;