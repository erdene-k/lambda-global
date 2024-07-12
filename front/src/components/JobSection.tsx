"use client";
import { Job } from "@/models/Job";
import React, { FormEvent, useEffect, useState } from "react";
import JobItem from "./JobItem";
import Image from "next/image";
import JobModal from "./JobModal";
import { fetchAPI } from "@/lib/api";
import { jobURL } from "@/lib/constants";
import useSWR, {mutate} from "swr";

const fetcher = (url: string) => fetchAPI('GET', url, {});

const JobSection = () => {
  const [openModal, setModal] = useState(false);
  const { data: jobs, error } = useSWR<Job[]>(jobURL, fetcher);

  const handleModal = () => {
    setModal(!openModal);
  };
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    await fetchAPI('POST', jobURL, values);
    mutate(jobURL);
    setModal(false);
  }

  if (error) return <div className="w-1/2 min-w-[50%] flex justify-center items-center"><strong>Failed to fetch</strong></div>;
  if (!jobs) return <div className="w-1/2 min-w-[50%] flex justify-center items-center"><strong>Loading...</strong></div>;

  return (
    <div className="w-1/2 min-w-[50%]">
      <div className="max-h-screen overflow-y-scroll thin-scrollbar">
        {jobs.map((job, index) => (
          <JobItem key={index} data={job} />
        ))}
      </div>
      <div
        className="flex gap-2 justify-center p-4 m-4 cursor-pointer"
        onClick={handleModal}
      >
        <p>Add new job</p>
        <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
      </div>
      <JobModal openModal={openModal} handleModal={handleModal} onSubmit={onSubmit} />
    </div>
  );
};

export default JobSection;
