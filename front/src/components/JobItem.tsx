"use client";
import { useState } from "react";
import { Job } from "@/models/Job";
import Image from "next/image";

const JobItem = ({ data }: { data: Job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={
        showDetails
          ? "bg-white shadow-md rounded-lg p-6 my-2 border-2 border-gray-700"
          : "bg-white shadow-md rounded-lg p-6 my-2"
      }
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-l font-bold mb-2">{data.title}</h2>
        <p>{data.condition.toLowerCase()}</p>
      </div>
      <p className="text-gray-700 mb-4">{data.description}</p>

      {showDetails && (
        <>
          <div className="text-gray-600 mb-4">
            <strong>Type:</strong> {data.jobType}
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside">
              {data.responsibilities.map((responsibilitiy, index) => (
                <li key={index} className="text-gray-700">
                  {responsibilitiy}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
              {data.skills.map((skill, index) => (
                <li key={index} className="text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className="my-1 flex justify-between">
        <p>Salary: {data.rate}₮</p>
        {!showDetails ? (
          <strong className="cursor-pointer px-4 py-2 rounded-lg hover:bg-cyan-950 bg-gray-600 text-white">
            Select
          </strong>
        ) : (
          <strong className="cursor-pointer px-4 py-2 rounded-lg hover:bg-cyan-950 bg-gray-100 text-gray-400">
            Unselect
          </strong>
        )}
      </div>
    </div>
  );
};

export default JobItem;
