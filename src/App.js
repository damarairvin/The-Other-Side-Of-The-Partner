import React from "react";
import "./styles/style.scss";
import Navbar from "react-bootstrap/Navbar";

import DatingAppLogo from "./assets/logo.svg";

import "./pages/login/localassets/style.scss";
import "./pages/login/login.js";
import LoginPage from "./pages/login/login.js";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sexo: "Sex orientation",
      race: "Race",
      success: ""
    };
    this.csexo = this.changesexo.bind(this);
    this.crace = this.changerace.bind(this);
    this.csucess = this.changesucess.bind(this);
  }
  changesexo() {
    this.setState({ sexo: " I'm a man who likes women." });
  }
  changerace() {
    this.setState({ race: " Asian" });
  }
  changesucess() {
    this.setState({ success: " You've successfully registered." });
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <Navbar bg="dark" variant="dark" className="navbar">
            <Navbar.Brand href="#">
              <img
                alt=""
                src={DatingAppLogo}
                width="150"
                height="50"
                className="d-inline-block align-top starmind-logo"
              />
              {" WHOW "}
            </Navbar.Brand>
          </Navbar>
          <div className="App">
            <div className="panel">
              <div>
                <img src={DatingAppLogo} className="App-logo" alt="logo" />
                Register
              </div>
              <form className="form">
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Username"
                    name="username"
                    id="username"
                    required
                  />
                  <label htmlFor="username" className="form__label">
                    User Mail
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="dob"
                    name="dob"
                    id="dob"
                    required
                  />
                  <label htmlFor="dob" className="form__label">
                    Data of Birth MM/DD/YYYY
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="dob"
                    name="dob"
                    id="dob"
                    required
                  />
                  <label htmlFor="dob" className="form__label">
                    Data of Birth MM/DD/YYYY
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="password"
                    className="form__field"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                  />
                  <label htmlFor="password" className="form__label">
                    Password
                  </label>
                </div>
                <div className="form__group field">
                  <input
                    type="password"
                    className="form__field"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                  />
                  <label htmlFor="password" className="form__label">
                    Repeat Password
                  </label>
                </div>
                <div>What's my primary sex orientation?</div>{" "}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.sexo}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      I'm a man who doesn't like women.
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={this.csexo}>
                      I'm a man who likes women.
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      I'm a woman who likes men.
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-4">
                      I'm a woman who doesn't like men.
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      I don't like human.
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div>What's my race/ethnicity?</div>{" "}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.race}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      American Indian or Alaska Native
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={this.crace}>
                      Asian
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Black or African American
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-4">
                      Hispanic or Latino
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      Native Hawaiian or Other Pacific Islander
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-6">White</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">Alien</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  className="float-right"
                  variant="primary"
                  onClick={this.csucess}
                >
                  Register
                </Button>{" "}
              </form>
              <div className="register-state">{this.state.success}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
