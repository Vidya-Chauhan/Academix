import React from "react";
import Navbar from "../compo/Navbar";

const LostAndFound = () => {
  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#2f4156] mb-6 text-center">Lost and Found</h1>
          <p className="text-gray-700 mb-4">
            If you have lost an item, please fill out the form below to report it. We will do our best to help you find it.
          </p>
          {/* Form can be added here */}
        </div>
      </div>
    </div>
  );
}
export default LostAndFound;
