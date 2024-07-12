"use client";
import JobSection from "@/components/JobSection";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <main>
      <div className="flex items-center space-x-4 mx-6 py-4 ">
        <h1 className="text-2xl font-bold text-gray-800 border-b w-1/">
          New Opportunities
        </h1>
      </div>
      <div className="flex mx-4 w-full">
        <JobSection />
        <ResumeSection />
      </div>
    </main>
  );
}
