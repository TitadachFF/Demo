import React, { useState } from "react";

const StateInFunction = (props) => {
    const [stateData, setStateData] = useState({
        
        id: props.id || "1",
        name: props.name || "Titadach Sratongaun",
        name1: props.name || "StateInFunction",
        count: 0
    });

    const handleIncrement = () => {
        setStateData(prevState => ({
            ...prevState,
            count: prevState.count + 1
        }));
    };

    const handleDecrement = () => {
        setStateData(prevState => ({
            ...prevState,
            count: prevState.count - 1
        }));
    };

    const buttonStyle = {
        backgroundColor: '#2EDCFF',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        margin: '5px',
        borderRadius: '3px'
    };

    return (
        <div>
         
            <h3>{stateData.name1}</h3>
            <strong>Name:</strong> {stateData.name}
            <p>Click Count: {stateData.count}</p>
            <button
                style={buttonStyle}
                onMouseEnter={e => (e.target.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.target.style.transform = 'translateY(0)')}
                onClick={handleIncrement}
            >
                Increment Count
            </button>
            <button
                style={buttonStyle}
                onMouseEnter={e => (e.target.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.target.style.transform = 'translateY(0)')}
                onClick={handleDecrement}
                
            >
                
                Decrement Count
            </button>
            
        </div>
    );
};

export default StateInFunction;
