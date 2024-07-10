import { Job, ProfessionLevel } from "@/models/Job";
import React from "react";
import JobItem from "./JobItem";

const JobSection = () => {
  const jobs: Job[] = [
    {
      title: "Frontend Developer",
      description:
        "We are looking for a passionate Frontend Developer to join our team. You will be responsible for building the 'client-side' of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.",
      salary: 75000,
      isRemote: true,
      professionLevel: ProfessionLevel.MIDDLE,
      type: "Full-time",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of experience in frontend development",
        "Proficient in HTML, CSS, JavaScript, and React",
        "Good problem-solving skills",
        "Excellent communication skills",
      ],
    },
    {
      title: "Backend Developer",
      description:
        "Seeking an experienced Backend Developer to design and implement server-side logic for our applications. The ideal candidate will have a strong understanding of database management, API development, and server-side programming.",
      salary: 85000,
      isRemote: false,
      professionLevel: ProfessionLevel.SENIOR,
      type: "Full-time",
      skills: ["Node.js", "Express", "MongoDB", "SQL"],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in backend development",
        "Proficient in Node.js, Express, and database management",
        "Strong understanding of RESTful API design",
        "Good problem-solving skills",
      ],
    },
    {
      title: "Full Stack Developer",
      description:
        "We are looking for a Full Stack Developer who is comfortable working with both front-end and back-end technologies. You will be involved in all stages of development from design to deployment.",
      salary: 90000,
      isRemote: true,
      professionLevel: ProfessionLevel.LEAD,
      type: "Contract",
      skills: ["JavaScript", "React", "Node.js", "Express", "SQL"],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of experience in full stack development",
        "Proficient in JavaScript, React, Node.js, Express, and SQL",
        "Experience with cloud services (e.g., AWS, Azure)",
        "Excellent communication and leadership skills",
      ],
    },
    {
      title: "DevOps Engineer",
      description:
        "We are seeking a skilled DevOps Engineer to manage our development operations. You will ensure the smooth deployment and operation of our systems, automate processes, and monitor system performance.",
      salary: 95000,
      isRemote: false,
      professionLevel: ProfessionLevel.MIDDLE,
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in DevOps",
        "Proficient in Docker, Kubernetes, CI/CD, and cloud services (AWS)",
        "Strong understanding of automation and monitoring tools",
        "Good problem-solving skills",
      ],
    },
  ];
  return (
    <div className="h-screen overflow-y-scroll w-1/2 min-w-[50%]">
      {jobs.map((job, index) => (
        <JobItem key={index} data={job} />
      ))}
    </div>
  );
};

export default JobSection;
