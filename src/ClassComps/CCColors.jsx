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
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('red')}
          >
            Red
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('blue')}
          >
            Blue
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('green')}
          >
            Green
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('pink')}
          >
            Pink
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('orange')}
          >
            Orange
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('purple')}
          >
            Purple
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.changeBackgroundColor('lightblue')}
          >
            Light Blue
          </button>
        </div>
      </div>
    );
  }
}
