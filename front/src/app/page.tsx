"use client";
import JobSection from "@/components/JobSection";
import ResumeSection from "@/components/ResumeSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [jobSelected, setJobSelected] = useState<number | null>(null);
  const [resumeSelected, setResumeSelected] = useState<number | null>(null);

  useEffect(() => {
    if(!jobSelected){
      setResumeSelected(null)
    }
    if(jobSelected && resumeSelected){
      console.log("broo", jobSelected, resumeSelected)
    }
  }, [jobSelected, resumeSelected]);

  return (
    <main>
      <div className="flex items-center space-x-4 mx-6 py-4 ">
        <h1 className="text-2xl font-bold text-gray-800 border-b w-1/">
          New Opportunities
        </h1>
      </div>
      <div className="flex mx-4 w-full">
        <JobSection selected={jobSelected} setSelected={setJobSelected} />
        <ResumeSection selected={resumeSelected} setSelected={setResumeSelected}/>
      </div>
    </main>
  );
}
