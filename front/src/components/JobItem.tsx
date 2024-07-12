import { useState } from "react";
import { Job } from "@/interfaces/Job";
import Image from "next/image";
import { JobItemProps } from "@/interfaces/Props";

const JobItem: React.FC<JobItemProps> = ({ data, selected, setSelected }) => {
  return (
    <div
      className={
        selected === data.id
          ? "bg-white shadow-md rounded-lg p-6 my-2 border-2 border-gray-700"
          : "bg-white shadow-md rounded-lg p-6 my-2"
      }
      onClick={() => setSelected(data.id)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-l font-bold mb-2">{data.title}</h2>
        <p className="text-cyan-950">{data.condition.toLowerCase()}</p>
      </div>
      <p className="text-gray-700 mb-4">{data.description}</p>

      {selected === data.id && (
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
        {selected !== data.id ? (
          <strong className="cursor-pointer px-4 py-2 rounded-lg hover:bg-cyan-950 bg-gray-600 text-white">
            Select
          </strong>
        ) : (
          <strong
            className="cursor-pointer px-4 py-2 rounded-lg hover:bg-cyan-950 bg-gray-100 text-gray-400"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
          >
            Unselect
          </strong>
        )}
      </div>
    </div>
  );
};

export default JobItem;
