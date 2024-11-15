import React from "react";
import LatestJobCard from "./LatestJobCard";

const randomJob = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-3xl font-bold">
        <span className="text-[#6A38C2]">Latest</span> Job{" "}
        <span className="text-[#6A38C2]">Openings</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJob.slice(0, 6).map((item, idx) => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
