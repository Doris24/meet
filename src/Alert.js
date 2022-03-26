import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.width = null;
        this.fontSize = null;
        this.maxWidth = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            width: this.width,
            fontSize: '13px',
            maxWidth: this.maxWidth,
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
        //this.maxWidth = '200px'
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.maxWidth = '200px'
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#03033d';
        this.width = 'auto';
        // this.fontSize = '13px';
        this.maxWidth = '250px';
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };