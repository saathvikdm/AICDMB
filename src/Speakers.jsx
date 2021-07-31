import React from "react";
import "./SpeakerStyle.css";

import Anand from "./assets/speakers/anand.jpg";
import Placeholder from './assets/speakers/placeholder.jpg'

const Speakers = () => {
  return (
    <div id="speakers" className="speakers-section">
      <h1 className="display-5 text-center mt-5">Keynote Speakers</h1>
      <hr className="ruler" />
      <div class="profile-card-container">
        <div class="profile-card">
          <div class="profileImage">
            <img src={Placeholder} alt="" className="staff-img" />
          </div>
          <div class="profileHead">
            <h4 class="profileHeadText">John Doe</h4>
            <p class="profileSmallDescription">
              Ph.D., Professor at University of ABC
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe dolore iusto culpa ipsa atque dignissimos rem? Aspernatur architecto, vel doloremque ducimus, exercitationem eaque ipsa dicta ad repellendus magni quisquam.
            </p>
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={Placeholder} alt="" className="staff-img" />
          </div>
          <div class="profileHead mb-1 pb-0">
            <h4 class="profileHeadText">John Doe</h4>
            <p class="profileSmallDescription">
              ACM Distinguished Speaker
              <br />
              Assistant Professor at University of CAB
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolores! Quaerat temporibus voluptas necessitatibus consequuntur earum consectetur ea nesciunt impedit. Pariatur, culpa. Molestiae reiciendis perspiciatis voluptatum dolor earum quia accusantium.
            </p>
          </div>
        </div>

        <div class="profile-card">
          <div class="profileImage">
            <img src={Placeholder} alt="" className="staff-img" />
          </div>
          <div class="profileHead pb-0 mb-1">
            <h4 class="profileHeadText">John Doe</h4>
            <p class="profileSmallDescription">
              Ph.D., Associate Professor of Computer Engineering, University of
              XYZ
            </p>
          </div>
          <div class="profileContent">
            <p class="profileDescription">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores facere corrupti eaque eligendi eius dicta minus deleniti cumque vel, autem quod et inventore fuga itaque a reprehenderit temporibus voluptates nisi?
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
            Anand Nayyar is working as Faculty, Researcher and Scientist in Graduate School, Duy Tan University, Da Nang, Vietnam from January 2018. Prior to this, he has worked as Assistant Professor in Department of Computer Applications & IT from August 2011 to December 2017. Before that, he served as Lecturer in Computer Science Department of Arya College and KLSD College, Affiliated to Punjab University, Chandigarh from 2009 to 2011.
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
