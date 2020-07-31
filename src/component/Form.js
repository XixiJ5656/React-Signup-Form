import React, { Component } from "react";

class Form extends Component {
  state = {
    userName: "",
    passWord: "",
    age: "",
    gender: "",
    occupation: "", //// selec
    ///try to add checkbox
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <label>
          Username:
          <input
            type="text"
            name="userName"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="passWord"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Age:
          <input
            type="???"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="radio"
            name="Gender"
            value="Female"
            onChange="this.handleChange"
          />
          Female
          <input
            type="radio"
            name="Gender"
            value="Male"
            onChange="this.handleChange"
          />
          Male
        </label>
        <br />
        <label>
          <textarea
            name="occupation"
            value={this.state.occupation}
            placeholder="Please descripe your occupation here!"
          ></textarea>
        </label>
        <h1>
          {this.state.userName} {this.state.passWord}
        </h1>
      </form>
    );
  }
}

export default Form;
