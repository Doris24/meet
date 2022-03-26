import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.width = null;
        this.backgroundColor = null;
        this.fontSize = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            width: '200px',
            backgroundColor: '#ffffff',
            fontSize: '14px'
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#03033d';
        this.width = '300px';
        this.backgroundColor = '#ffffdd';
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };