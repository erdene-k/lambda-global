"use client";
import JobSection from "@/components/sections/JobSection";
import ResumeSection from "@/components/sections/ResumeSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [jobSelected, setJobSelected] = useState<number | null>(null);
  const [resumeSelected, setResumeSelected] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!jobSelected) {
      setResumeSelected(null);
    }
    if (jobSelected && resumeSelected) {
      router.push(`/result?job=${jobSelected}&resume=${resumeSelected}`);
    }
  }, [jobSelected, resumeSelected]);

  return (
    <main className="h-screen">
      <div className="flex items-center space-x-4 mx-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800 border-b w-1/">
          New Opportunities
        </h1>
      </div>
      <div className="flex mx-4 w-full">
        <JobSection selected={jobSelected} setSelected={setJobSelected} />
        <ResumeSection
          selected={resumeSelected}
          setSelected={setResumeSelected}
        />
      </div>
    </main>
  );
}
