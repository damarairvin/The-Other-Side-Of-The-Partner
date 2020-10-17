import React from "react";
import "../../styles/style.scss";
import Navbar from "react-bootstrap/Navbar";

import DatingAppLogo from "../../assets/logo.svg";

import "./localassets/style.scss";

export default class LoginPage extends React.Component {
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
              <img src={DatingAppLogo} className="App-logo" alt="logo" />
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
                <button className="button" type="button">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <span>LOG IN</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
