import { Resume } from "@/models/Resume";
import React from "react";
import ResumeItem from "./ResumeItem";

const ResumeSection = () => {
    const resumeList: Resume[] = [
        {
          name: "Software Developer Resume",
          content: "Experienced software developer proficient in JavaScript, React, and Node.js.",
        },
        {
          name: "UX/UI Designer Resume",
          content: "Creative designer with expertise in user experience and interface design.",
        },
        {
          name: "Data Analyst Resume",
          content: `Analytical thinker skilled in SQL, Python, and data visualization.
          Analytical thinker skilled in SQL, Python, and data visualization.
          
          Analytical thinker skilled in SQL, Python, and data visualization.
          Analytical thinker skilled in SQL, Python, and data visualization.
          Analytical thinker skilled in SQL, Python, and data visualization.

          Analytical thinker skilled in SQL, Python, and data visualization.
          Analytical thinker skilled in SQL, Python, and data visualization.
          Analytical thinker skilled in SQL, Python, and data visualization.
          Analytical thinker skilled in SQL, Python, and data visualization.`
        },
      ];
  return (
    <div className="flex-col items-center  flex mx-10">
      {resumeList.map((resume, index) => (
        <ResumeItem key={index} data={resume} />
      ))}
    </div>
  );
};

export default ResumeSection;
