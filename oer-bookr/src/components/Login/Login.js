import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    userLogin = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
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
                <button
                    type='submit'
                    value='Login'
                    onClick={this.userLogin}
                >Login</button>
            </div>
        );
    }
}

export default Login;