"use client";
import { Resume } from "@/models/Resume";
import React, { useState } from "react";
import ResumeItem from "./ResumeItem";
import Image from "next/image";
import ResumeForm from "@/components/ResumeForm";
import { fetchAPI } from "@/lib/api";
import useSWR from "swr";
import { resumeURL } from "@/lib/constants";

const fetcher = (url: string) => fetchAPI('GET', url, {});

const ResumeSection = () => {
  const [addResume, setAddResume] = useState(false);
  const toggleAddResume = () => {
    setAddResume(!addResume);
  };

  const { data: resumeList, error } = useSWR<Resume[]>(resumeURL, fetcher);
  if (error) return <div className="w-1/2 min-w-[50%] flex justify-center items-center"><strong>Failed to fetch</strong></div>;
  if (!resumeList) return <div className="w-1/2 min-w-[50%] flex justify-center items-center"><strong>Loading...</strong></div>;


  return (
    <div className="flex-col items-center flex mx-10">
      {resumeList.map((resume, index) => (
        <ResumeItem key={index} data={resume} />
      ))}
      <div className="flex justify-center gap-2 m-4">
        <div>
          {!addResume ? (
            <div
              onClick={toggleAddResume}
              className="flex gap-2 justify-center"
            >
              <p className="text-blue-600">Add new resume</p>
              <Image src="/icons/plus-blue.svg" alt="plus" width={20} height={20} />
            </div>
          ) : (
            <div onClick={toggleAddResume}>
              <ResumeForm />
              <p className="text-gray-400 text-center m-2 cursor-pointer">
                Close
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
