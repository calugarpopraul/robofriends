import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.state({ hasError: true})
    }

    render() {
        return this.state.hasError ? <h1> Ooops. That is not good</h1> : this.props.children;    
    }
}

export default ErrorBoundry;