import React from "react";
import TypewriterComponent from "typewriter-effect";
import { ResumeWebsite } from "../constants";
const HeroContents = () => {
  const {
    home_page: { hero },
  } = ResumeWebsite;
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl md:text-6xl font-bold font-headingFont mb-4">
          {hero.title}
        </h1>
        <h2 className="text-2xl font-bold font-bodyFont">
          <TypewriterComponent
            options={{
              strings: [hero.tagline],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Social Media Section */}
        <div className="w-full text-center mt-5">
          <div className="flex space-x-6 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white rounded-sm"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-white rounded-sm"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-white rounded-sm"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContents;
