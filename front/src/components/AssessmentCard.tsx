import { Match } from "@/interfaces/Match";
import React from "react";

interface AssessmentCardProps {
  assessmentData: Match;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ assessmentData }) => {
  const formatText = (text: string) => {
    let res = "";
    text.split("\n").forEach((line, index) => {
      if (line.includes("Overall Fit:")) {
        res = line.split(":")[1].trim();
      }
    });
    return res;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 w-96 bg-white shadow-lg rounded-lg h-80 overflow-auto">
      <div className="flex justify-between my-4">
        <div className="flex gap-2">
          <strong>Resume: {assessmentData.resumeId}</strong>
          <strong>Job: {assessmentData.jobId}</strong>
        </div>
        <strong className="text-blue-600">
          Percentage: {formatText(assessmentData.msg)}
        </strong>
      </div>
      <p>{assessmentData.msg}</p>
    </div>
  );
};

export default AssessmentCard;
