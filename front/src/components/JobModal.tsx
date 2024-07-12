import React, { useState, FormEvent } from "react";

interface ModalProps {
  openModal: boolean;
  handleModal: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Modal = ({ openModal, handleModal, onSubmit }: ModalProps) => {
  return (
    openModal && (
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-gray-800/40 flex justify-center items-center z-10">
        <div className="max-w-[540px] w-full bg-white shadow-lg py-1 rounded-md mx-4">
          <form onSubmit={onSubmit} className="max-w-lg mx-auto p-6">
            <div className="mb-2">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="responsibilities"
                className="block text-gray-700 font-bold mb-2"
              >
                Responsibilities
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="skills"
                className="block text-gray-700 font-bold mb-2"
              >
                Skills (comma-separated)
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="my-2 flex justify-between">
              <div>
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md min-w-20"
                >
                  <option value="FULLTIME">Full-time</option>
                  <option value="PARTTIME">Part-time</option>
                  <option value="CONTRACTOR">Contractor</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="conditions"
                  className="block text-gray-700 font-bold mb-2 min-w-32"
                >
                  Conditions
                </label>
                <select
                  id="conditions"
                  name="conditions"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="REMOTE">Remote</option>
                  <option value="HYBRID">Hybrid</option>
                  <option value="ONSITE">On-site</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="rate"
                className="block text-gray-700 font-bold mb-2"
              >
                Rate per hour
              </label>
              <input
                type="number"
                id="rate"
                name="rate"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleModal}
                className="w-full bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-cyan-900 hover:text-white"
              >
                Close
              </button>
              <button
                type="submit"
                className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-950"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
