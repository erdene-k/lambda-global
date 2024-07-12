"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";
import { uploadURL } from "@/lib/constants";

const ResumeForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange =async(event: React.ChangeEvent<HTMLInputElement>) =>{
    if (event.target.files) {
      setFile(event.target.files[0]);
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      // await fetchAPI("POST", uploadURL, formData, true)
    }
  }

  return (
    <form
      className="bg-white p-6 rounded border shadow-md w-full min-w-96"
    >
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Image
              src="/icons/upload.svg"
              alt="upload"
              width={80}
              height={24}
            />
            <p className="my-2 text-sm text-black-500 font-semibold">
              Энд дарж CV-ээ оруулна уу
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PDF/DOC</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" multiple={false} onChange={onFileChange} accept="pdf/docs"/>
        </label>
      </div>
    </form>
  );
};

export default ResumeForm;
