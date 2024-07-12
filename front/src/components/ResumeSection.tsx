"use client";
import { Resume } from "@/interfaces/Resume";
import React, { useState } from "react";
import ResumeItem from "./ResumeItem";
import Image from "next/image";
import ResumeForm from "@/components/ResumeForm";
import { fetchAPI } from "@/lib/api";
import useSWR from "swr";
import { resumeURL } from "@/lib/constants";
import { SectionProps } from "@/interfaces/Props";

const fetcher = (url: string) => fetchAPI("GET", url, {});

const ResumeSection: React.FC<SectionProps> = ({ setSelected }) => {
  const [addResume, setAddResume] = useState(false);
  const { data: resumeList, error } = useSWR<Resume[]>(resumeURL, fetcher);
  const toggleAddResume = () => {
    setAddResume(!addResume);
  };
 
  if (error) return <div className="w-1/2 min-w-[50%] flex justify-center items-center"><strong>Failed to fetch</strong></div>;
  if (!resumeList) return <div className="w-1/2 min-w-[50%] flex justify-center items-center"><strong>Loading...</strong></div>;

  return (
    <div className="flex-col items-center flex mx-10">
      {resumeList.map((resume, index) => (
        <ResumeItem
          key={index}
          data={resume}
          setSelected={setSelected}
        />
      ))}
      <div className="flex justify-center gap-2 m-4">
        <div>
          {!addResume ? (
            <div
              onClick={toggleAddResume}
              className="flex gap-2 justify-center"
            >
              <p className="text-blue-600">Add new resume</p>
              <Image
                src="/icons/plus-blue.svg"
                alt="plus"
                width={20}
                height={20}
              />
            </div>
          ) : (
            <div>
              <ResumeForm />
              <p className="text-gray-400 text-center m-2 cursor-pointer"  onClick={toggleAddResume}>
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
