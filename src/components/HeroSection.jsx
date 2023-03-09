import React from "react";
import image from "../assets/sec1.jpg";
import R from "../assets/r.png";

const HeroSection = () => {
  return (
    <div>
      <div
        className="w-[100%] h-[800px]"
        style={{
          backgroundImage: `url(${R}), linear-gradient(rgba(34,34,34,0.5),rgba(34,34,34,0)),url(${image})`,
          backgroundPosition: "4% 20%, left top ,left top",
          backgroundRepeat: "no-repeat,no-repeat ,no-repeat",
          backgroundSize: "20% 90%, auto ,cover",
        }}
      >
        <div className="ml-[13%] pt-[13%] w-[50%]">
          <div className="text-5xl text-[#1BB1E3] border-l-4 border-[#1BB1E3]">
            <h2 className="pl-10">REDPHANTOM TECH NOVELTY</h2>
            <h3 className="text-4xl text-white pl-10 mt-5">
              WE HAVE EXTREMELY EFFECTIVE IT SOLUTIONS FOR YOUR INDUSTRY
            </h3>
          </div>

          <div className="text-justify w-[80%]">
            <p className="text-white mt-10">
              Our top goal is to ensure that the requirements of our customers
              remain our top
              <br />
              priority at all times throughout the process of integrating new
              features into our
              <br />
              current services as we expand our service offerings.
            </p>
            <p className="text-white mt-10">
              Consequently, we will be in a better position to react to the
              changing requirements of our customers and to provide them with
              better service in the future. Consequently, we consistently exceed
              our client's expectations by exceeding their needs, and we take
              care of any extra problems that occur on their behalf. Every
              aspect of our activity is overseen by a service sector
              organization, which is responsible for all aspects of our work.
              This organization is in charge of putting policies in place,
              executing programs, and assessing results on the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
