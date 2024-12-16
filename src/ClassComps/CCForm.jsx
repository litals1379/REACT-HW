import React, { Component } from 'react';

export default class CCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fNameCommand: "",
      lNameCommand: "",
      gradeCommand: "",

      gradeMessage: ""

    }
  }

  fNameFocused = (e) => {
    e.target.value = ""
    this.setState({ fNameCommand: "Enter your first name please!!" })
  }
  lNameFocused = (e) => {
    e.target.value = ""
    this.setState({ lNameCommand: "Enter your last name please!!" })

  }
  gradeFocused = (e) => {
    e.target.value = ""
    this.setState({ gradeCommand: "Enter your grade please!!", gradeMessage: "" })

  }

  onBlured = () => {
    this.setState({ fNameCommand: "", lNameCommand: "" })
  }

  gradeOnBlured = (e) => {
    if (Number(e.target.value) > 555)
      this.setState({ gradeCommand: "", gradeMessage: "You were accepted to study!!!!" })
    else
      this.setState({ gradeCommand: "", gradeMessage: "Try again next year" })
  }


  render() {
    return (
      <div>
        <h1>CCForm</h1>
        <form>
          <p style={{ color: "red" }}>{this.state.fNameCommand}</p>
          <label htmlFor="fName">First Name:</label>
          <input type="text" onFocus={this.fNameFocused} onBlur={this.onBlured} name='fName' />
          <br />
          <br />
          <p style={{ color: "red" }}>{this.state.lNameCommand}</p>
          <label htmlFor="lName">Last Name</label>
          <input type="text" onFocus={this.lNameFocused} onBlur={this.onBlured} name='lName' />
          <br />
          <br />
          <p style={{ color: "red" }}>{this.state.gradeCommand}</p>

          <label htmlFor="garde">Grade:</label>
          <input type="number" onFocus={this.gradeFocused} onBlur={this.gradeOnBlured} name='grade' />
          <p style={{ color: "red" }}>{this.state.gradeMessage}</p>
        </form>
      </div>
    )
  }
}
