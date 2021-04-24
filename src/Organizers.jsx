import React from "react";
import "./BodyStyles.css";

import Princi from "./assets/faculty/princ.png";
import Gururaj from "./assets/faculty/gururaj.png";
import Hod from "./assets/faculty/rkumar.png";
import Rnd from "./assets/faculty/rnd.png";
import Fin_cc_1 from "./assets/faculty/Committee Asset/BG-R/fin_cc_1.jpg";
import Fin_cc_2 from "./assets/faculty/Committee Asset/BG-R/fin_cc_2.jpg";
import Pub_cc_1 from "./assets/faculty/Committee Asset/BG-R/pub_cc_1.jpg";
import Pub_cc_2 from "./assets/faculty/Committee Asset/BG-R/pub_cc_2.jpg";
import Pub_cc_3 from "./assets/faculty/Committee Asset/BG-R/pub_cc_3.jpg";
import Publ_cc_1 from "./assets/faculty/Committee Asset/BG-R/publ_cc_1.jpg";
import Publ_cc_2 from "./assets/faculty/Committee Asset/BG-R/publ_cc_2.jpg";
import Publ_cc_3 from "./assets/faculty/Committee Asset/BG-R/publ_cc_3.jpg";
import Reg_cc_1 from "./assets/faculty/Committee Asset/BG-R/reg_cc_1.jpg";
import Reg_cc_2 from "./assets/faculty/Committee Asset/BG-R/reg_cc_2.jpg";
import Reg_cc_3 from "./assets/faculty/Committee Asset/BG-R/reg_cc_3.jpg";
import Spon_cc_1 from "./assets/faculty/Committee Asset/BG-R/spon_cc_1.jpg";
import Spon_cc_2 from "./assets/faculty/Committee Asset/BG-R/spon_cc_2.jpg";
import Web_cc_1 from "./assets/faculty/Committee Asset/BG-R/web_cc_1.jpg";
import Web_cc_2 from "./assets/faculty/Committee Asset/BG-R/web_cc_2.jpg";
import Web_cc_4 from "./assets/faculty/Committee Asset/BG-R/web_cc_4.jpg";
import Web_cc_3 from "./assets/faculty/Committee Asset/BG-R/web_cc_3.jpg";
import Publication from "./publication";
import Anil_aicte from "./assets/faculty/Committee Asset/Patrons/Anil_AICTE.jpg";
import Vvs_prez from "./assets/faculty/Committee Asset/Patrons/vvs_prez.jpg";
import Vvs_vp from "./assets/faculty/Committee Asset/Patrons/vvs_viceprez.jpg";
import Vvs_secy from "./assets/faculty/Committee Asset/Patrons/vvs_secy.jpg";
import Vvs_tres from "./assets/faculty/Committee Asset/Patrons/vvs_tres.jpg";

const Organizers = () => {
  return (
    <div id="organizers" className="speakers-section">
      <h1 className="display-5 text-center mt-5">Patrons</h1>
      <hr className="ruler" style={{ width: "50px" }} />
      <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img
              src={Anil_aicte}
              alt=""
              className="staff-img"
              style={{ height: "220px" }}
            />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. Anil D Sahasrabudhe</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Chairman, AICTE</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Vvs_prez} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Gundappa Gowda</h4>
            {/* <h5 className="text-center">President, VVS</h5> */}
            <p className="speaker-desc text-center">President, VVS</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Vvs_vp} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Shivalingappa B</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Vice-President, VVS</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Vvs_secy} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Vishwanath P</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Secretary, VVS</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img
              src={Vvs_tres}
              alt=""
              className="staff-img"
              style={{ height: "220px" }}
            />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Sri Shrishaila Ramannavar</h4>
            {/* <h5 className="text-center">General Chair</h5> */}
            <p className="speaker-desc text-center">Treasurer, VVS</p>
          </div>
        </div>
      </div>
      <h1 className="display-5 text-center mt-5">Organizing Chairs</h1>
      <hr className="ruler" style={{ width: "200px" }} />
      <div class="profile-card-container">
        <div class="profile-card" style={{ height: "420px" }}>
          <div class="profileImage">
            <img src={Princi} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. B. Sadashive Gowda</h4>
            <h5 className="text-center">General Chair</h5>
            <p className="speaker-desc text-center">Principal VVCE, Mysuru</p>
          </div>
        </div>
        <div class="profile-card" style={{ height: "420px" }}>
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
        <div class="profile-card" style={{ height: "420px" }}>
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
        <div class="profile-card" style={{ height: "420px" }}>
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
      <div className="container">
        <h1 className="display-5 text-center mt-5">Organizing Committee</h1>
        <hr className="ruler" />
        <h4 className="display-5 text-center mt-5">Publication Co-Chairs</h4>
        <hr className="ruler_custom" />
        <div className="row_center">
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Publ_cc_1}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Dr. Ramakrishna Hegde</div>
              <small class="staff-designation text-center">
                Associate Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Publication Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Pub_cc_3}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Pooja M R</div>
              <small class="staff-designation text-center">
                Associate Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Publication Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Publ_cc_3}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Anusha K S</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Publication Co-Chair
              </small>
            </div>
          </div>
        </div>
        <h4 className="display-5 text-center mt-5">
          Publicity and Presentation Co-Chairs
        </h4>
        <hr className="ruler_custom" />
        <div className="row_center">
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Pub_cc_1}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Dr. Aditya C R</div>
              <small class="staff-designation text-center">
                Associate Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Publicity and Presentation Co-Chair
              </small>
            </div>
          </div>

          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Publ_cc_2}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Pavan Kumar S P</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Publicity and Presentation Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Pub_cc_2}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Nithin Kumar</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Publicity and Presentation Co-Chair
              </small>
            </div>
          </div>
        </div>
        <h4 className="display-5 text-center mt-5">Web Co-Chairs</h4>
        <hr className="ruler_custom" />
        <div className="row_center">
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Web_cc_1}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Dr. Natesh M</div>
              <small class="staff-designation text-center">
                Associate Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Web Co-Chair
              </small>
            </div>
          </div>
          {/* <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Web_cc_2}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Sachin D N</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Web Co-Chair
              </small>
            </div>
          </div> */}
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Web_cc_3}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Rakesh K R</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Web Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Web_cc_4}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Shashank N</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Web Co-Chair
              </small>
            </div>
          </div>
        </div>
        <h4 className="display-5 text-center mt-5">Sponsorship Co-Chairs</h4>
        <hr className="ruler_custom" />
        <div className="row_center">
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Spon_cc_1}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Janhavi V</div>
              <small class="staff-designation text-center">
                Associate Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Sponsorship Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Spon_cc_2}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Swathi B H</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Sponsorship Co-Chair
              </small>
            </div>
          </div>
        </div>
        <h4 className="display-5 text-center mt-5">Finance Co-Chairs</h4>
        <hr className="ruler_custom" />
        <div className="row_center">
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Fin_cc_1}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Dr. Paramesha K</div>
              <small class="staff-designation text-center">
                Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Finance Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Fin_cc_2}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Ravi P</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Finance Co-Chair
              </small>
            </div>
          </div>
        </div>
        <h4 className="display-5 text-center mt-5">Registration Co-Chairs</h4>
        <hr className="ruler_custom" />
        <div className="row_center">
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Reg_cc_1}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Hamsaveni M</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Registration Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Reg_cc_2}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Harshitha K</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Registration Co-Chair
              </small>
            </div>
          </div>
          <div className="col-6 col-sm-3 pb-4 staff-card">
            <div className="d-flex flex-column align-items-center">
              <img
                src={Reg_cc_3}
                height="100px"
                width="100px"
                class="staff-img"
              />
              <div class="staff-name text-center">Prof. Chaya Kumari H A</div>
              <small class="staff-designation text-center">
                Assistant Professor, VVCE
              </small>
              <small class="staff-qualification text-center">
                Registration Co-Chair
              </small>
            </div>
          </div>
        </div>

        <h1 className="display-5 text-center mt-5">
          Advisory and Review Committee
        </h1>
        <hr className="ruler" />
        <ul>
          <li>
            Dr. Fernando Koch, IBM GTS Innovation Senior Technical Solutions
            Manager; Eisenhower Fellow; ACM Distinguished Speaker.
          </li>
          <li>
            Prof. Amlan Chakrabarti, Dean Engg. and Tech. & Director School of
            IT, University of Calcutta & Dist. Speaker at ACM, Sr. Member ACM &
            IEEE.
          </li>
          <li>
            Dr. Varun Menon, Distinguished Speaker at ACM, Associate Professor
            and Head of International Partnerships at SCMS Group.
          </li>
          <li>
            Dr. Ullas Nambiar, Principal Director AI at Accenture, Innovation
            Strategist, Startup Mentor Bengaluru, Karnataka, India.
          </li>
          <li>
            Dr. Ramasuri Narayanam, Senior Research Scientist at IBM Research,
            India Bengaluru, Karnataka, India.
          </li>
          <li>
            Dr. G R Sinha, ACM Distinguished Speaker of ACM New York & Professor
            at Myanmar Institute of Information Tech. (MIIT) Mandalay Myanmar,
            Myanmar.
          </li>
          <li>
            Dr. Anand Nayyar, ACM Distinguished Speaker, Professor, Researcher,
            Scientist, Author, Innovator, Inventor, Orator, Senior
            Member-ACM/IEEE.
          </li>
          <li>
            Dr. Pradeep Kumar TS, Associate Professor in School of Computing
            Science and Engineering at Vellore Institute of Technology (VIT)
            Chennai campus, Chennai, Tamil Nadu, India.
          </li>
          <li>
            Dr. Prasanna Ranjith Christodoss, Faculty of Information Technology.
            Shinas College of Technology Sultanate of Oman.
          </li>
          <li>
            Dr. Neha Sharma, Founder Secretary, Society for Data Science Senior
            IEEE Member, Execom Member, IEEE Pune Section.
          </li>
        </ul>

        <h1 className="display-5 text-center mt-5">
          Technical Program Committee
        </h1>
        <hr className="ruler" />
        <ul className="mb-5">
          <li>
            Dr. Sandeep Chakraborty, Assistant Professor, Department of Computer
            Science and Engineering, Indian Institute of Technology Kharagpur,
            India.
          </li>
          <li>
            Dr. Arun Solanki, Gautam Buddha University Greater Noida, India.
          </li>
          <li>
            Dr. Hanaa Hachimi, Tofail University-National School of Applied
            Sciences of Kenitra, Morocco.
          </li>
          <li>
            Dr. Prathosh A P, Assistant Professor, Department of Computer
            Technology & Electrical Engineering Indian Institute of Technology
            Delhi.
          </li>
          <li>
            Dr. Deepu Vijayasenan, Assistant Professor, Department of ECE, NIT
            Surathkal, Karnataka.
          </li>
          <li>
            Dr. Ramkumar Krishnamoorthy, Department of Information and
            Communications Technology Villa College QI CAMPUS Male' Maldives.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Organizers;
