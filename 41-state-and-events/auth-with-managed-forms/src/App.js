import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    credentials: {
      userName: "u",
      password: "p"
    },
    loginForm: {
      userName: "",
      password: ""
    }
  };

  handleChange = event => {
    console.log("The key name will be ", event.target.name);
    console.log("The value will be ", event.target.value);

    const newLoginFormValues = Object.assign({}, this.state.loginForm, {
      [event.target.name]: event.target.value
    });

    this.setState({
      loginForm: newLoginFormValues
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.loginForm.userName === this.state.credentials.userName &&
      this.state.loginForm.password === this.state.credentials.password
    ) {
      console.log("Welcome");
    } else {
      const newLoginFormValues = Object.assign({}, this.state.loginForm, {
        password: ""
      });
      this.setState({
        loginForm: newLoginFormValues
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          Username:{" "}
          <input
            type="text"
            onChange={this.handleChange}
            name="userName"
            value={this.state.loginForm.userName}
          />
          <br />
          Password:{" "}
          <input
            type="text"
            onChange={this.handleChange}
            name="password"
            value={this.state.loginForm.password}
          />
          <br />
          <button>Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default App;
