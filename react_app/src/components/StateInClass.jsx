import React, { Component } from "react";

export default class StateInClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            name: "StateInClass",
            name1: props.name || "Titadach Sratongaun",
            count: 0  // New state for the click count
        };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        const buttonStyle = {
            backgroundColor: '#2EDCFF',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
            margin: '5px',
            borderRadius: '3px'
            
        };
        const buttonHoverStyle = {
            transform: 'translateY(-10px)'
        };
        return (
            
            <div>
                <h3>{this.state.name}</h3>
                <h3>{this.state.name1}</h3>
                <p>Click Count: {this.state.count}</p>
                <button style={{ ...buttonStyle }}
                    onMouseEnter={(e) => (e.target.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')} style={buttonStyle} onClick={this.handleIncrement}>Increment Count</button>
                <button style={{ ...buttonStyle }}
                    onMouseEnter={(e) => (e.target.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')} style={buttonStyle} onClick={this.handleDecrement}>Decrement Count</button>
            </div>
        );
    }
}
