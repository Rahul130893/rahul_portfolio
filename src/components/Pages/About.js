import React from "react";
//import profile from "../images/ProfileImg.jpeg"
import profile from "../images/rahulImage.jpeg";

function About() {
  return (
    <div>
      <div className="aboutmeintro" id="aboutDiv">
        A short introduction about me
      </div>
      <div className="About">
        <div className="abouttext">
          <div className="headtext">
            I'm Rahul,
            <div>A Full Stack MERN Developer</div>
          </div>
          <div className="details">
            A highly dedicated and passionate full-stack web developer with
            excellent administrative and communication skills and the ability to
            write efficient code. Looking forward to an exciting opportunity in
            a challenging role as a full-stack developer
          </div>
          <div className="more">
           
          </div>
          <br />
          <div className="more">
            <div className="headtext">Education</div>
            <div className="details edu">
              <div className="backEdu">
                <p>Full Stack Web Developer</p>
                <p>Masai School, Bengaluru</p>
                <p>Sept 2021 - Present</p>
              </div>
            </div>

            <div className="details edu">
              <p>BE Mechanical Engineering</p>
              <p>Acharya Institute of Technology, Bengaluru</p>
              <p>Aug 2013 - 2017</p>
            </div>
          </div>
        </div>
        <div className="imageme">
          <img src={profile} alt="Allan" height="350" width="300" />
        </div>
      </div>
    </div>
  );
}

export default About;
