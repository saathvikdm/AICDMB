import React from "react";
import "./components/navbar/CustomStyle.css";
import Aicte from "./assets/aicte.png";
import Acm from "./assets/ACMO.svg";
import Vvce from "./assets/vvce.png";
import Iop from "./assets/indexers/iop.svg";
import Cse from "./assets/indexers/cse.png";
import Iict from "./assets/indexers/IICT.png";
import "./MastStyles.css";
import ExternalSolid from "./assets/external-link-alt-solid.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Masthead = () => {
  const handleClose = () => {
    let banner = document.getElementById("banner");
    banner.classList.toggle("hide");
  };

  return (
    <div className="bd-masthead">
      <div className="fullBanner" id="banner">
        Alert! Paper Submission Final Deadline has been extended until December
        15, 2020
        <FontAwesomeIcon
          className="closeBtn"
          icon={faTimes}
          onClick={handleClose}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-auto col-md-4 order-md-2">
            <img
              src="https://vvce.acm.org/Assets/aicdmb.png"
              alt="aicdmb"
              width="512"
              height="430"
              className="lead-img img-fluid mb-3 mb-md-0"
            />
          </div>
          <div className="col-md-8 order-md-1 text-center middle-align text-md-left pr-md-5">
            <img
              className="mt-lg-ed5"
              src={Aicte}
              alt=""
              height="100px"
              width="100px"
            />
            <h1 className="spons-text mt-2">AICTE Sponsored</h1>
            <h1 className="mb-1 mastHead lead-text">AICDMB 2021</h1>
            <h2 className="desc">
              <span className="custom-text-col">Second</span> Annual
              International Conference on Data Science, Machine Learning and
              Blockchain Technology
            </h2>
            <div className="row my-4 sponsor">
              {/* <div className="col4 mx-2"><img src={Vvce} alt="" height="75px" width="75px"/></div> */}
              {/* <div className="col4 mx-2"><img src={Acm} alt="" height="75px" width="75px"/></div> */}
            </div>
            {/* <h1 className="mb-3 mastHead lead-text">Annual International Conference on Data Science, Machine Learning and Blockchain Technology (AICDMB)</h1> */}
            <div class="d-flex flex-column flex-md-row flex-xs-row">
              {/* <a href="#about" class="btn btn-lg btn-primary mb-3 mr-md-3 btn-border" onclick="#">Get Started</a> */}
              <a href="#papers" class="btn-alt mb-3 mr-md-3 btn-border">
                Get Started
              </a>
              {/* <a href="#" class="btn btn-lg btn-primary mb-3 btn-border btn-dark-border" onclick="#">Register</a> */}
              <Link className="btn-alt mb-3 btn-border" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="row details-block">
          <div className="col-6 details mt-3">
            <h5 className="details-head">WHEN</h5>
            <h3 className="details-text">Feburary 15 and 16, 2021</h3>
          </div>
          <div className="col-6 details mt-3">
            <h5 className="details-head">WHERE</h5>
            <h3 className="details-text">
              <a
                href="https://vvce.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff" }}
              >
                Vidyavardhaka College of Engineering, Mysuru{" "}
                <img
                  className="svg-icon"
                  src={ExternalSolid}
                  alt=""
                  height="10px"
                  width="10px"
                />
              </a>
            </h3>
          </div>
        </div>
        <div className="host-section">
          <h1 className="spons-text mt-5">Hosted by</h1>
          <div className="row">
            <div className="col- mx-2">
              <a
                href="https://vvce.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Vvce} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col-">
              <a
                href="https://vvce.ac.in/department/computer-science-engineering/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Cse} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col- mx-2">
              <a
                href="https://vvce.acm.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Acm} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col- mx-2">
              <a
                href="https://www.iop.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Iop} alt="" height="100px" width="100px" />
              </a>
            </div>
            <div className="col- mx-2">
              <img
                src={Iict}
                alt="IICT Logo"
                height="120px"
                width="170px"
                style={{ transform: "translateY(-10px)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
