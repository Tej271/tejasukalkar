import React from "react";
import Signature from "../assets/think.png";
import eLetter from "../assets/ee.png";

const Vision = () => {
  return (
    <div
      className="bg-[#222222] pb-10"
      style={{
        backgroundImage: `url(${Signature}), url(${eLetter})`,
        backgroundPosition: "left bottom, 90% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "48% auto, auto 90%",
      }}
    >
      <div className="flex flex-col w-[90%] items-center m-auto">
        <div className="border-l-4 border-[#1BB1E3] pl-4 mt-10">
          <h2 className="text-[#1BB1E3] text-2xl">
            ENHANCING EVERYONE TO BE{" "}
            <span className="text-4xl">SUCCESSFUL</span> !
          </h2>
          <p className="text-white mt-4">
            AT REDPHANTOM TECH NOVELTY, WE BELIEVE THAT ENABLING EVERYONE TO
            EMERGE IS
            <br /> TO BECOME A BETTER VERSION OF THEMSELVES EVERY DAY.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly w-[90%] mt-10">
          <div className="bg-white text-black text-center px-1 mt-10 py-4">
            <h4 className="text-xl pb-4">Empowered To Learn</h4>
            <p className="text-lg">
              We take great pleasure referring to ourselves as a<br /> business
              that is always asking questions and continually
              <br /> learning new things.With great learning and development
              <br /> relationships, there will never be a day when your skills
              <br /> and knowledge do not continue to improve.
            </p>
          </div>
          <div className="bg-white text-black text-center px-1 mt-10 py-4">
            <h4 className="text-xl pb-4">Empowered To Learn</h4>
            <p className="text-lg">
              We take great pleasure referring to ourselves as a<br /> business
              that is always asking questions and continually
              <br /> learning new things.With great learning and development
              <br /> relationships, there will never be a day when your skills
              <br /> and knowledge do not continue to improve.
            </p>
          </div>
          <div className="bg-white text-black text-center px-1 mt-10 py-4">
            <h4 className="text-xl pb-4">Empowered To Learn</h4>
            <p className="text-lg">
              We take great pleasure referring to ourselves as a<br /> business
              that is always asking questions and continually
              <br /> learning new things.With great learning and development
              <br /> relationships, there will never be a day when your skills
              <br /> and knowledge do not continue to improve.
            </p>
          </div>
          <div className="bg-white text-black text-center px-1 mt-10 py-4">
            <h4 className="text-xl pb-4">Empowered To Learn</h4>
            <p className="text-lg">
              We take great pleasure referring to ourselves as a<br /> business
              that is always asking questions and continually
              <br /> learning new things.With great learning and development
              <br /> relationships, there will never be a day when your skills
              <br /> and knowledge do not continue to improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
