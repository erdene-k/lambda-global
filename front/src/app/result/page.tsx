"use client";

import { fetchAPI } from "@/lib/api";
import { useSearchParams } from "next/navigation";
import { matchURL } from "@/lib/constants";
import useSWR from "swr";
import { Match } from "@/interfaces/Match";
import AssessmentDisplay from "@/components/AssessmentDisplay";
import FailedWarning from "@/components/loaders/FailedWarning";
import FullScreenLoader from "@/components/loaders/FullScreenLoader";


export default function Page() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("job");
  const resumeId = searchParams.get("resume");
  const fetcher = (url: string) => fetchAPI("POST", url, { jobId, resumeId });

  const { data: match, error } = useSWR<Match>(matchURL, fetcher);

  if (error) return <FailedWarning />;
  if (!match) return <FullScreenLoader />;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AssessmentDisplay assessmentData={match.msg} />
    </div>
  );
}
