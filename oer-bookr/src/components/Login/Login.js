import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='Username'
                        name='username'
                        required
                    />
                    <input 
                        type='text'
                        placeholder='Password'
                        name='password'
                        required
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;