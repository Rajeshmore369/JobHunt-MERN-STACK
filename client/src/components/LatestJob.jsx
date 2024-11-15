import LatestJobCard from "./LatestJobCard";
import { useSelector } from "react-redux";

const LatestJob = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-3xl font-bold">
        <span className="text-[#6A38C2]">Latest</span> Job{" "}
        <span className="text-[#6A38C2]">Openings</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJob;
