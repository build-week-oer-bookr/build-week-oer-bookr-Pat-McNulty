import React from 'react';

const authenticate = HomePage => Login => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('username')) {
                this.setState({ loggedIn: false});
            } else {
                this.setState({ loggedIn: true })
            }
        }

        render() {
            if (this.state.loggedIn) return <HomePage />;
            return <Login />;
        }
    }

    export default authenticate;