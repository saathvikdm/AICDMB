import React from "react";
import "./BodyStyles.css";
import Conference from "./assets/conference.svg";

import "./SpeakerStyle.css";
import { Link } from "react-router-dom";
import Princi from "./assets/faculty/princ.png";
import Gururaj from "./assets/faculty/gururaj.png";
import Hod from "./assets/faculty/rkumar.png";
import Rnd from "./assets/faculty/rnd.png";

const About = () => {
  return (
    <div>
      <div id="papers" className="container about-section">
        <h1 className="display-5 text-center">Call for Papers</h1>
        <hr className="ruler" />
        <div className="row mt-5">
          {/* <div className="col-12 col-lg-5 order-md-1"><img src={Papers} alt="" height="100%" width="100%"/></div> */}
          <div className="cforp col-12">
            <p className="lead mt-4 text-justify">
              AICDMB 2021 warmly invites full length original research papers
              describing latest findings and research works to the conference
              from academic professionals, R&D organizations, government
              departments and research scholars from across the globe. The
              manuscripts must contribute original ideas and should not have
              been published in any journals, conference proceedings or
              magazines and not under review in any of them. IOP manuscript
              template to be used.
              <br />
            </p>
            <table class="table table-light mt-4">
              <tbody>
                <tr>
                  <td>Paper Submission Deadline</td>
                  <td>
                    October 20, 2021
                  </td>
                </tr>
                <tr>
                  <td>Paper Acceptance Notification</td>
                  <td>December 10, 2021</td>
                </tr>
                <tr>
                  <td>Copyright and Final Paper Submission</td>
                  <td>December 30, 2021</td>
                </tr>
                <tr>
                  <td>Conference Dates</td>
                  <td>February 16 & 17, 2022</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center">
              <Link
                to="/papers"
                class="text-center mt-4 btn btn-lg btn-alt btn-border btn-border"
                onclick="#"
              >
                Submit Now!
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div id="organizers" className="speakers-section">
        <h1 className="display-5 text-center mt-5">Organizing Chairs</h1>
        <hr className="ruler" />
        <div class="profile-card-container">
          <div class="profile-card" style={{ height: "450px" }}>
            <div class="profileImage">
              <img src={Princi} alt="" className="staff-img" />
            </div>
            <div class="profileHead">
              <h4 class="profileHeadText">Dr. B. Sadashive Gowda</h4>
              <h5 className="text-center">General Chair</h5>
              <p className="speaker-desc text-center">Principal VVCE, Mysuru</p>
            </div>
          </div>
          <div class="profile-card" style={{ height: "450px" }}>
            <div class="profileImage">
              <img src={Rnd} alt="" className="staff-img" />
            </div>
            <div class="profileHead">
              <h4 class="profileHeadText">Dr. G.B. Krishnappa</h4>
              <h5 className="text-center">General Co-Chair</h5>
              <p className="speaker-desc text-center">
                Dean (R&D) of VVCE, Mysuru
              </p>
            </div>
          </div>
          <div class="profile-card" style={{ height: "450px" }}>
            <div class="profileImage">
              <img src={Hod} alt="" className="staff-img" />
            </div>
            <div class="profileHead">
              <h4 class="profileHeadText">Dr. Ravi Kumar V</h4>
              <h5 className="text-center">Program Chair</h5>
              <p className="speaker-desc text-center">
                Professor and Head of Dept. of CSE, VVCE, Mysuru
              </p>
            </div>
          </div>
          <div class="profile-card" style={{ height: "450px" }}>
            <div class="profileImage">
              <img src={Gururaj} alt="" className="staff-img" />
            </div>
            <div class="profileHead">
              <h4 class="profileHeadText">Dr. Gururaj H L</h4>
              <h5 className="text-center">Program Co-Chair</h5>
              <p className="speaker-desc text-center">
                ACM Distinguished Speaker <br /> Associate Professor at Dept. of
                CSE, VVCE, Mysuru
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="container about-section">
        <h1 className="display-5 text-center">About the Conference</h1>
        <hr className="ruler" />
        <div className="row mb-5">
          <div className="about-conference col-12 col-lg-7 mt-md-4">
            <p className="lead text-justify pt-3 pt-md-5">
              <b>AICDMB</b> is an international conference dedicated to advances
              in Data Science, Machine Learning and Blockchain Technology. The
              conference is a yearly event for a world-class gathering of
              researchers from academia and industry, practitioners, and
              business leaders, providing a forum for discussing cutting edge
              research, and directions for new innovative business and
              technology.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <img src={Conference} alt="" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
