import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCarding from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ================== ABOUT IMG ================== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:oreder-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCarding} alt="" />
            </div>
          </div>

          {/* ================== ABOUT CONTENT ================== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              For an unparalleled span of 30 consecutive years, India News
              Report has bestowed upon us the distinguished honor of being one
              of the nation's foremost public hospitals. Our unwavering
              commitment to excellence has consistently ranked us as the number
              one healthcare institution in the vibrant city of Jaipur.
            </p>
            <p className="text__para mt-[30px]">
              Every day, we aspire to achieve our very best, focusing on patient
              care. We don't dwell on past accomplishments; instead, we look
              forward to what we can achieve tomorrow. Our commitment is to
              provide exceptional care.
            </p>
            <Link to="/">
              <button className="btn"> Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
