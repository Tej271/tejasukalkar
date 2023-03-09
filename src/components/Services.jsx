import React from "react";
import eLetter from "../assets/e.png";
import bulbMan from "../assets/sec3.png";

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${eLetter})`,
        backgroundPosition: "5% -10%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        position: "relative",
        height: "800px",
      }}
    >
      <div style={{}}>
        <div className="text-center p-10">
          <h2 className="text-[#1BB1E3] text-4xl">
            <span className="text-5xl">STRATEGIC</span> ENGINEERING
          </h2>
        </div>
        <div className="flex flex-row justify-evenly text-xl m-15">
          <div className="text-center">
            <h4>Web Product Services</h4>
            <p className="mt-5">
              Our extensive application
              <br /> devlopment services
              <br /> offers the services that aid
              <br /> in product creation.
            </p>
          </div>
          <div className="text-center">
            <h4>Quality Augmentation</h4>
            <p className="mt-5">
              We optimize your existing
              <br /> IT applications, as well as
              <br /> platform them to make
              <br /> re-architect and re-
              <br /> them easier and more
              <br /> innovative.
            </p>
          </div>
          <div className="text-center">
            <h4>
              Demonstration And
              <br /> Support of Prototypes
            </h4>
            <p className="mt-5">
              We offer profound
              <br /> judgement and assist you in
              <br /> maximizing the value of
              <br /> your application through
              <br /> support and retain options.
            </p>
          </div>
          <div className="text-center">
            <h4>Testing Services</h4>
            <p className="mt-5">
              Each stage of the app
              <br /> development process
              <br /> includes functional,
              <br /> regression, automated and
              <br /> security testing that is built
              <br /> into the process.
            </p>
          </div>
        </div>
      </div>

      {/* Lower Div */}
      <div className="flex flex-col w-[50%] float-right mr-40 mt-5">
        <div className="text-center p-10 ">
          <h2 className="text-[#1BB1E3] text-4xl">
            PRODUCTIVE<span className="text-5xl"> TALENT </span>MANAGEMENT
          </h2>
        </div>
        <div className="text-center ">
          We are utilizing the global talent revolution, we are opening new
          digital portals <br /> to exploring new possibilities and ideas. We
          are retaining our place in the
          <br /> competitive age of the future and moving on from there for the
          future to create
          <br /> sustainable digital development for the community.
        </div>
        <div className="flex flex-row flex-wrap justify-evenly w-[85%] self-center ">
          <div className="bg-[#1BB1E3] py-2 px-6 text-white text-center mt-8 font-normal w-[37%]">
            Attaining The Top Talent
          </div>
          <div className="bg-[#1BB1E3] py-2 px-6 text-white text-center mt-8 font-normal w-[37%]">
            Performance Management
          </div>
          <div className="bg-[#1BB1E3] py-2 px-6 text-white text-center mt-8 font-normal w-[37%]">
            Value Based Hiring
          </div>
          <div className="bg-[#1BB1E3] py-2 px-6 text-white text-center mt-8 font-normal w-[37%]">
            Succession Planning
          </div>
        </div>
      </div>
      <div
        className="absolute border-1 border-black top-2"
        style={{ left: "-10%" }}
      >
        <img src={bulbMan} alt={"bulb-image"} width={"80%"} />
      </div>
    </div>
  );
};

export default Services;
