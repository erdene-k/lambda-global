"use client";
import JobSection from "@/components/JobSection";
import ResumeForm from "@/components/ResumeForm";
import ResumeSection from "@/components/ResumeSection";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [addResume, setAddResume] = useState(false);
  const toggleAddResume = () => {
    setAddResume(!addResume);
  };
  return (
    <main>
      <div className="flex items-center space-x-4 mx-6 py-4 ">
        <h1 className="text-2xl font-bold text-gray-800 border-b w-1/">
          New Opportunities
        </h1>
      </div>
      <div className="flex mx-4 w-full">
        <JobSection />
        <div>
          <div className="flex justify-center gap-2 m-4">
            <div>
              {!addResume ? (
                <div onClick={toggleAddResume} className="flex gap-2 justify-center">
                  <p>Add new resume</p>
                  <Image
                    src="/icons/plus.svg"
                    alt="plus"
                    width={20}
                    height={20}
                  />
                </div>
              ):
               <div onClick={toggleAddResume}>
                  <ResumeForm />
                  <p className="text-gray-400 text-center m-2 cursor-pointer">Close</p>
                </div>
                 }
            </div>
          </div>
          <ResumeSection />
        </div>
      </div>
    </main>
  );
}
