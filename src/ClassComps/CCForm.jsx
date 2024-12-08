import React, { Component } from 'react';

export default class CCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      grade: '',
      firstNameError: '',
      lastNameError: '',
      gradeError: '',
      gradeMessage: '',
    };
  }

  handleFirstNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      firstName: value,
      firstNameError: value === '' ? 'עליך למלא שם פרטי' : '',
    });
  };

  handleLastNameChange = (e) => {
    const value = e.target.value;
    this.setState({
      lastName: value,
      lastNameError: value === '' ? 'עליך למלא שם משפחה' : '',
    });
  };

  handleGradeChange = (e) => {
    const value = e.target.value;
    let message = '';
    if (value !== '' && !isNaN(value)) {
      const grade = parseInt(value, 10);
      if (grade >= 555) {
        message = 'התקבלת ללימודים!';
      } else {
        message = 'עליך לנסות שוב בשנה הבאה.';
      }
    }
    this.setState({
         grade: value,
         gradeError: value === '' ? ' עליך למלא את ציון הפסיכומטרי' : '',
         gradeMessage: message
    });  
  };

  render() {
    return (
      <div
        style={{
          border: 'solid green 2px',
          margin: 5,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <p style={{ color: 'red' }}>{this.state.firstNameError}</p>
        שם פרטי:
        <input
          type="text"
          onBlur={this.handleFirstNameChange}
          onChange={this.handleFirstNameChange}
        />
        <br />
        <p style={{ color: 'red' }}>{this.state.lastNameError}</p>
        שם משפחה:
        <input
          type="text"
          onBlur={this.handleLastNameChange}
          onChange={this.handleLastNameChange}
        />
        <br />
        <p>{this.state.gradeMessage}</p>
        <p style={{ color: 'red' }}>{this.state.gradeError}</p>
        ציון פסיכומטרי:
        <input
          type="text"
          onBlur={this.handleGradeChange}
          onChange={this.handleGradeChange}
        />
      </div>
    );
  }
}
