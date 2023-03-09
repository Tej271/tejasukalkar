import React from "react";
import HangMan from "../assets/sec2.png";
import Signature from "../assets/think.png";
import WLetter from "../assets/w.png";

const GoalSection = () => {
  return (
    <div className="bg-[#1BB1E3] h-[700px] relative">
      <div
        style={{
          backgroundImage: `url(${Signature}), url(${WLetter})`,
          backgroundPosition: "left center, right center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "48% auto, auto 60%",
        }}
      >
        <div className="flex flex-row">
          <div>
            <img
              src={HangMan}
              width="69%"
              style={{ objectFit: "auto" }}
              alt="hangman"
            />
          </div>
          <div className="text-white w-[40%] text-justify p-5 ml-40 mt-40">
            <h2 className="text-2xl text-right border-r-4 border-white pr-5">
              WE ARE <span className="text-4xl">THINKING</span> OF A NEW
              <br /> APPROACH TO YOUR CURRENT METHODS
            </h2>
            <h5 className="mt-5">
              Our top goal is to ensure that the requirements of our customers
              remain our top priority at all times throughout the process of
              integrating new features into our current services as we expand
              our service offerings.
              <p className="mt-5">
                Consequently, we'll be in a better position to react to the
                changing requirements of our customers and to provide them with
                better service in the future. Consequently, we consistently
                exceed our client's expectations by exceeding their needs, and
                we take care of any extra problems that occur on their behalf.
                Every aspect of our activity is overseen by a service sector
                organization, which is responsible for all aspects of our work.
                This organization is in charge of putting policies in place,
                executing programs, and assessing results on the field.
              </p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
