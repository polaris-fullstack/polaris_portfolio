import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Nazmul Hossain, a passionate JavaScript developer
            specializing in creating innovative web solutions and user-friendly
            interfaces. As the creator of the{" "}
            <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
              OlovaJS
            </a>{" "}
            UI Framework, I’m dedicated to simplifying development workflows and
            pushing the boundaries of JavaScript frameworks. My focus is on
            making web development faster, easier, and accessible to all
            developers. Currently, I’m expanding into backend development to
            grow as a full-stack developer and create seamless, robust web
            applications. I’m a lifelong learner and innovator, driven by a
            desire to contribute to the developer community with new ideas and
            tools that deliver real value.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
