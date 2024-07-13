import { ResumeItemProps } from "@/interfaces/Props";
import React, { useState } from "react";

const ResumeItem: React.FC<ResumeItemProps> = ({
  data,
  setSelected,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const maxLength = 300; 
  data.content = data.content.replaceAll(',, ,','').replaceAll(',,','')
  const truncatedContent = data.content.length > maxLength 
    ? data.content.slice(0, maxLength) + '...'
    : data.content;

  return (
    <div 
      onClick={() => setSelected(data.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-gradient-to-r from-gray-50 to-blue-50 border-r-4 border-x border-gray-500 rounded-lg 
      shadow-lg p-6 mb-6 
      transition-all duration-300 
      transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <p className="text-gray-700 whitespace-pre-line">
        {isHovered ? data.content : truncatedContent}
      </p>
      {!isHovered && data.content.length > maxLength && (
        <span className="text-blue-400 m-2">Hover me</span>
      )}
    </div>
  );
};

export default ResumeItem;
