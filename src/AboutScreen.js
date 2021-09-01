import React from "react";

const AboutScreen = () => {
  return (
    <div>
      <div className="mt-20 flex justify-center ">
        <div className="max-w-xl w-full">
          <h1 className="font-bold text-3xl p-2">About this Project</h1>
        </div>
      </div>
      <div className="mx-auto max-w-xl w-full p-2  ">
        D2 map is a project created by University of Michigan students and
        sponsored by State Senator Adam Hollier. Senator Hollier's goal is to
        enable greater visibility into ongoing local events, resources, and
        businesses in order to stretch beyond city borders and foster a cohesive
        and collaborative community. This project is not for profit and strictly
        for the greater good of the community members it serves.
      </div>
    </div>
  );
};

export default AboutScreen;
