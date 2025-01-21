import React from "react";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";

import img1 from "../assets/one.png";
import img2 from "../assets/two.png";
import img3 from "../assets/three.png";
import img4 from "../assets/four.png";
// import img5 from "./assets/five.png";
import img6 from "../assets/six.png";
import img7 from "../assets/seven.png";
// import img8 from "../assets/eight.png";
import img9 from "../assets/nine.png";
import img10 from "../assets/ten.png";

function ImageSliderPage() {
  return (
    <div>
      <div className="companies-logo-wrapper">
        <div className="companies-logo-gradient">OVER 450+ HIRING PARTNERS</div>
        <div class="companies-logo-heading">
          Top Startups &amp; MNCs Hire<span class="span-blue"></span>
        </div>
        <div className="role-change-company">
          <Typewriter
            options={{
              strings: [
                "Frontend Develper",
                "Full stack Developer",
                "Backend Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="companies-logo-text"></p>
        <div className="logo-wrapper">
          <Marquee speed={100} delay={0} direction="right">
            <div className="companies-logo">
              <div className="logo-holder">
                <img src={img1} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img2} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img3} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img4} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img6} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img7} alt="" />
              </div>

              <div className="logo-holder">
                <img src={img9} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img10} alt="" />
              </div>
            </div>
          </Marquee>
          <Marquee speed={100} delay={0}>
            <div className="companies-logo">
              <div className="logo-holder">
                <img src={img1} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img2} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img3} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img4} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img6} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img7} alt="" />
              </div>

              <div className="logo-holder">
                <img src={img9} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img10} alt="" />
              </div>
            </div>
          </Marquee>
          <Marquee speed={100} delay={0} direction="right">
            <div className="companies-logo">
              <div className="logo-holder">
                <img src={img4} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img6} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img7} alt="" />
              </div>

              <div className="logo-holder">
                <img src={img9} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img10} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img1} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img2} alt="" />
              </div>
              <div className="logo-holder">
                <img src={img3} alt="" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default ImageSliderPage;
