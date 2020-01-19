import React, {Component} from "react";
import ErrorMessage from "../ErrorMessage";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        return this.state.hasError ?
            <ErrorMessage message="Ups... Something went wrong, please try again later"/>
            : this.props.children;
    }
}