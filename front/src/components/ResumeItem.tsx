import { Resume } from "@/models/Resume";
import React from "react";

const ResumeItem = ({ data }: { data: Resume }) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-r-4 border-gray-500 rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.name}</h2>
      <p className="text-gray-700">{data.content}</p>
    </div>
  );
};

export default ResumeItem;
