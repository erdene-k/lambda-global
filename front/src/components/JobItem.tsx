"use client";
import { useState } from "react";
import { Job } from "@/models/Job";

const JobItem = ({ data }: { data: Job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 my-2"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
        <strong className={data.isRemote ? "text-green-600" : "text-yellow-400"}>
          {data.isRemote ? "Remote" : "Onsite"}
        </strong>
      </div>
      <p className="text-gray-700 mb-4">{data.description}</p>


      {showDetails && (
        <>
          <div className="text-gray-600 mb-4">
            <strong>Level:</strong> {data.professionLevel}
          </div>
          <div className="text-gray-600 mb-4">
            <strong>Type:</strong> {data.type}
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
              {data.skills.map((skill, index) => (
                <li key={index} className="text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <ul className="list-disc list-inside">
              {data.requirements.map((requirement, index) => (
                <li key={index} className="text-gray-700">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
            <div className="text-gray-600 mb-4 flex justify-between">
       <p> <strong>Salary:</strong> ${data.salary}</p>
        <strong className="cursor-pointer">{!showDetails ? 'Click for more':'Hide'}</strong>
      </div>
    </div>
  );
};

export default JobItem;
