import React from "react";
import Hong from "./assets/speakers/honglin.jpg";
import Anand from "./assets/speakers/anand.jpg";
import Heena from "./assets/speakers/heena.jpg";
import "./SpeakerStyle.css";
// import Speakersvg from "./assets/speakersvg.svg";
import Paolo from "./assets/speakers/paolo.jpg";

const Speakers = () => {
  return (
    <div id="speakers" className="speakers-section">
      <h1 className="display-5 text-center mt-5">Keynote Speakers</h1>
      <hr className="ruler" />
      <div class="profile-card-container">
        <div class="profile-card">
          <div class="profileImage">
            <img src={Hong} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">Dr. Hong Lin</h4>
            <p class="profileSmallDescription">
              Ph.D., Professor at University of Downtown, Houston
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Dr. Hong Lin holds a Ph.D. in Computer Science. His graduate work
              includes theoretical and empirical studies of parallel programming
              models and implementations. Dr. Lin has worked on large-scale
              computational biology at Purdue University, active networks at the
              National Research Council Canada, and network security at Nokia,
              Inc. Dr. Lin joined UHD at 2001 and he is currently a professor in
              computer science.
            </p>
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={Heena} alt="" className="staff-img" />
          </div>
          <div class="profileHead mb-1 pb-0">
            <h4 class="profileHeadText">Dr. Heena Rathore</h4>
            <p class="profileSmallDescription">
              ACM Distinguished Speaker
              <br />
              Assistant Professor at University of Texas, USA
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Dr. Heena Rathore started working as an Assistant Professor at
              University of Texas, San Antonio (Spring 2020). In fall 2019, she
              was working with Texas A&M University as a Visiting Assistant
              Professor. Prior to that, she was working as a Data Scientist and
              Program Manager at Hiller Measurements, USA.
            </p>
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={Paolo} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">Dr. Paolo Trunfio</h4>
            <p class="profileSmallDescription">
              Ph.D., Associate Professor of Computer Engineering, University of
              Calabria, Italy
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Paolo Trunfio is an Associate Professor of computer engineering at
              DIMES Department, University of Calabria, Italy. He is also
              co-founder and managing director of DtoK Lab S.r.l., an academic
              spin-off of the University of Calabria. He is currently serving as
              Associate Editor of the IEEE Transactions on Cloud Computing and
              is a member of the editorial board of several scientific journals
              including Future Generation Computer Systems, Peer-to-Peer
              Networking and Applications and the Journal of Big Data.
            </p>
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={Anand} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">Dr. Anand Nayyar</h4>
            <p class="profileSmallDescription">
              Faculty, Researcher and Scientist at Duy Tan University, Da Nang,
              Vietnam
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Anand Nayyar is working as Faculty, Researcher and Scientist in
              Graduate School, Duy Tan University, Da Nang, Vietnam from January
              2018. Prior to this, he has worked as Assistant Professor in
              Department of Computer Applications & IT from August 2011 to
              December 2017. Before that, he served as Lecturer in Computer
              Science Department of Arya College and KLSD College, Affiliated to
              Punjab University, Chandigarh from 2009 to 2011.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* <h1 className="display-5 text-center mt-5">Plenary Speakers</h1><hr className="ruler"/>
            <div className="profile-card-container">
                <div class="profile-card">
                    <div class="profileImage">
                        <img src={Anand} alt="" />
                    </div>
                    <div class="profileHead">
                        <h4 class="profileHeadText">Dr. Anand Nayyar</h4>
                        <p class="profileSmallDescription">Faculty, Researcher and Scientist at Duy Tan University, Da Nang, Vietnam</p>
                    </div>
                    <div class="profileContent">    
                        <p class="profileDescription">
                        Anand Nayyar is working as Faculty, Researcher and Scientist in Graduate School, Duy Tan University, Da Nang, Vietnam from January 2018. Prior to this, he has worked as Assistant Professor in Department of Computer Applications & IT from August 2011 to December 2017. Before that, he served as Lecturer in Computer Science Department of Arya College and KLSD College, Affiliated to Punjab University, Chandigarh from 2009 to 2011. </p>
                    </div>
                </div>
                <div class="profile-card">
                    <div class="profileImage">
                        <img src={Speakersvg} alt="" />
                    </div>
                    <div class="profileHead">
                        <h4 class="profileHeadText">Coming Soon</h4>
                        <p class="profileSmallDescription"></p>
                    </div>
                    <div class="profileContent">    
                        <p class="profileDescription">Speaker yet to be decided.
                        </p>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Speakers;
