import React from 'react';

interface AssessmentDisplayProps {
  assessmentData: string;
}

const OverallFit: React.FC<{ fit: string }> = ({ fit }) => (
  <div className="bg-gray-100/20 border-r-4 border-gray-500 p-4 mt-6 rounded-r-lg">
    <div className="flex items-center">
      <div className="text-gray-700 font-bold text-xl mr-2">Overall Fit:</div>
      <div className="text-3xl font-extrabold text-blue-600">{fit}</div>
    </div>
    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-gray-700 h-2.5 rounded-full" style={{ width: fit }}></div>
    </div>
  </div>
);

const AssessmentDisplay: React.FC<AssessmentDisplayProps> = ({ assessmentData }) => {
  const formatText = (text: string) => {
    let overallFit = '';
    const formattedLines: JSX.Element[] = [];

    text.split('\n').forEach((line, index) => {
      if (line.includes('Overall Fit:')) {
        overallFit = line.split(':')[1].trim();
      } else if (line.includes(':')) {
        const [key, value] = line.split(':');
        formattedLines.push(
          <p key={index} className="mb-2">
            <span className="font-semibold">{key}:</span>
            <span className="ml-1">{value}</span>
          </p>
        );
      } else if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
        formattedLines.push(
          <li key={index} className="ml-6 list-disc">
            {line.trim().substring(1).trim()}
          </li>
        );
      } else if (/^\d+\./.test(line.trim())) {
        formattedLines.push(
          <li key={index} className="ml-6 list-decimal">
            {line.trim().substring(line.indexOf('.') + 1).trim()}
          </li>
        );
      } else {
        formattedLines.push(<p key={index} className="mb-2">{line}</p>);
      }
    });

    return (
      <>
        {formattedLines}
        {overallFit && <OverallFit fit={overallFit} />}
      </>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="prose">{formatText(assessmentData)}</div>
    </div>
  );
};

export default AssessmentDisplay;