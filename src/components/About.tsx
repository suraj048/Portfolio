import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen text-center sm:text-2xl  text-amber-500 p-2 bg-neutral-800"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center py-8 my-8 sm:py-auto sm:my-auto">
        <div className="col-span-2">
          <p className="uppercase font-bold tracking-widest text-[#ffffff]">
            About
          </p>
          <h2 className="py-2">Who Am I ?</h2>
          <p className="py-2 text-gray-400">
            Motivated Front-End Development intern with a strong understanding
            of responsive design and user experience. I’m passionate about
            learning new technologies and understand there is more than one way
            to accomplish a task. Though I am most proficient in building
            front-end applications using HTML, CSS, Javascript, and React, I am
            a quick learner and can pick up new tech stacks as needed. I believe
            that being a great developer is not using one specific language, but
            choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-400">
            I started my web developement journey in 2021, Initially i was
            teaching students across the world how to build a simple websites,
            Now seeking opportunities in developement, I had created some
            awesome projects, to view you can simply clcik on my gitHub link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
