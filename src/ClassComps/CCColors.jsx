import React, { Component } from 'react';

export default class CCColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'snow', // צבע רקע התחלתי
    };
  }

  changeBackgroundColor = (color) => {
    this.setState({ bgColor: color });
  };

  render() {
    const colors = [
      'red',
      'blue',
      'green',
      'yellow',
      'pink',
      'orange',
      'purple',
      'lightblue',
    ];

    return (
      <div
        style={{
          border: 'solid red 2px',
          margin: 5,
          padding: 5,
          borderRadius: 10,
          backgroundColor: this.state.bgColor,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          {colors.map((color) => (
            <button
              key={color}
              className="btn"
              style={{
                backgroundColor: color,
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
              onClick={() => this.changeBackgroundColor(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
