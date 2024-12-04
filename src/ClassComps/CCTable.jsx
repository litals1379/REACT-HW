import React, { Component } from 'react';

export default class CCTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWidth: '100%', // הרוחב ההתחלתי של הטבלה
    };
  }

  handleSingleClick = () => {
    this.setState({ tableWidth: '50%' }); // משנה את הרוחב ל-50% בלחיצה אחת
  };

  handleDoubleClick = () => {
    this.setState({ tableWidth: '100%' }); // מחזיר את הרוחב ל-100% בלחיצה כפולה
  };

  render() {
    return (
      <div
        style={{
          border: 'solid blue 2px',
          margin: 5,
          padding: 5,
          borderRadius: 10,
          width: this.state.tableWidth,
        }}
        onClick={this.handleSingleClick}
        onDoubleClick={this.handleDoubleClick}
      >
        <table
          style={{
            border: 'solid black 1px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
