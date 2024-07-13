"use client";

import { fetchAPI } from "@/lib/api";
import { matchURL } from "@/lib/constants";
import useSWR from "swr";
import { Match } from "@/interfaces/Match";
import FailedWarning from "@/components/loaders/FailedWarning";
import FullScreenLoader from "@/components/loaders/FullScreenLoader";
import AssessmentCard from "@/components/AssessmentCard";

export default function Page() {
  const fetcher = (url: string) => fetchAPI("GET", url, {});

  const { data: matches, error } = useSWR<Match[]>(matchURL, fetcher);

  if (error) return <FailedWarning />;
  if (!matches) return <FullScreenLoader />;

  return (
    <div className="min-h-screen bg-gray-100 flex gap-8 flex-wrap w-screen">
      {matches.map((match, index) => (
        <div key={index} className="">
          <AssessmentCard assessmentData={match} />
        </div>
      ))}
    </div>
  );
}
