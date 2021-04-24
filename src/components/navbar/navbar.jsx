import React, { Component } from "react";
import "./NavStyles.css";
import Logo from "../../assets/aicdmb.png";
import "./CustomStyle.css";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    toggle: false,
  };

  openFunc = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className="flex-container">
          <ul className="uList">
            <li className="logo">
              <Link activeClassName="active" to="/" exact>
                <img
                  src={Logo}
                  style={{ height: "50px", width: "50px" }}
                  alt="AICDMB_Logo"
                />
              </Link>
            </li>
            <div
              id="nav-icon"
              className={toggle ? "open" : null}
              onClick={this.openFunc}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              id="navLink"
              className="responsive"
              style={toggle ? { maxHeight: "500px" } : null}
            >
              <NavLink activeClassName="active" to="/" exact>
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <Link to="/committee">Committee</Link>
              </li>
              <li>
                <a href="/#speakers">Speakers</a>
              </li>
              <li>
                <Link to="/publication">Publication</Link>
              </li>
              <li>
                <a
                  href="https://publishingsupport.iopscience.iop.org/author-guidelines-for-conference-proceedings/"
                  target="_blank"
                >
                  Author Guidelines
                </a>
              </li>
              <li>
                <Link to="/register">Registration</Link>
              </li>
              <NavLink activeClassName="active" to="/aicdmb20" exact>
                <li>
                  <a>AICDMB 2019-20</a>
                </li>
              </NavLink>
              <li>
                <Link
                  to="/papers"
                  className="btn-alt"
                  style={{ color: "#fff" }}
                >
                  Call for Papers
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
