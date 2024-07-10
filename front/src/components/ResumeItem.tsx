import { Resume } from "@/models/Resume";
import React from "react";

const ResumeItem = ({ data }: { data: Resume }) => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-blue-100 border-r-4 border-blue-500 rounded-lg shadow-md p-6 mb-4 cursor-pointer w-full" >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{data.name}</h2>
      <p className="text-gray-600">{data.content}</p>
    </div>
  );
};

export default ResumeItem;
