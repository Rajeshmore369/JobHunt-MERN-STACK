/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router";

const Job = ({ job }) => {
  const naviagte = useNavigate();
  const daysAgoFun = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentDate = new Date();
    const timeDiff = currentDate - createdAt;
    return Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 ">
          {daysAgoFun(job?.createdAt) == 0
            ? "Today"
            : `${daysAgoFun(job?.createdAt)}days Ago`}
        </p>
        <Button className="rounded-full " size="icon" variant="outline">
          <BookMarked />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className=" p-6" size="icon" variant="outline">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium ">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold my-2">{job?.title}</h1>
        <p className=" text-sm text-gray-600 ">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-[#822fca] font-bold "} variant="ghost">
          {job?.position} positions
        </Badge>
        <Badge className={"text-blue-700 font-bold "} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-red-700 font-bold "} variant="ghost">
          {job?.salary} Lpa
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => naviagte(`/job/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#822fca] hover:text-[#822fca] hover:bg-gray-100">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
