import React, { Component } from 'react';

export default class CCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      grade: '',
      firstNameError: 'עליך למלא שם פרטי',
      lastNameError: 'עליך למלא שם משפחה',
      gradeError: 'עליך למלא את ציון הפסיכומטרי',
      gradeMessage: '',
      showFirstNameError: false,
      showLastNameError: false,
      showGradeError: false,
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
        message = 'עליך לנסות שוב בשנה הבאה:(';
      }
    }
    this.setState({
      grade: value,
      gradeError: value === '' ? 'עליך למלא את ציון הפסיכומטרי' : '',
      gradeMessage: message,
    });
  };

  handleFocus = (field) => {
    this.setState({ [field]: true });
  };

  handleBlur = (field) => {
    this.setState({ [field]: false });
  };

  render() {
    return (
      <div
        style={{
          direction: 'rtl',
          textAlign: 'right',
          border: 'solid green 2px',
          margin: 5,
          padding: 5,
          borderRadius: 10,
        }}
      >
        {this.state.showFirstNameError && this.state.firstNameError && (
          <p style={{ color: 'red' }}>{this.state.firstNameError}</p>
        )}
        שם פרטי:
        <input
          type="text"
          value={this.state.firstName}
          onFocus={() => this.handleFocus('showFirstNameError')}
          onBlur={() => this.handleBlur('showFirstNameError')}
          onChange={this.handleFirstNameChange}
        />
        <br />
        <br />
        {this.state.showLastNameError && this.state.lastNameError && (
          <p style={{ color: 'red' }}>{this.state.lastNameError}</p>
        )}
        שם משפחה:
        <input
          type="text"
          value={this.state.lastName}
          onFocus={() => this.handleFocus('showLastNameError')}
          onBlur={() => this.handleBlur('showLastNameError')}
          onChange={this.handleLastNameChange}
        />
        <br />
        <br />
        {this.state.showGradeError && this.state.gradeError && (
          <p style={{ color: 'red' }}>{this.state.gradeError}</p>
        )}
        ציון פסיכומטרי:
        <input
          type="text"
          value={this.state.grade}
          onFocus={() => this.handleFocus('showGradeError')}
          onBlur={() => this.handleBlur('showGradeError')}
          onChange={this.handleGradeChange}
        />
        <p>{this.state.gradeMessage}</p>
      </div>
    );
  }
}
