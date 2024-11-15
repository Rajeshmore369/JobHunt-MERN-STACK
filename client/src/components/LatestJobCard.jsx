import { Badge } from "./ui/badge";

const LatestJobCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg ">company Name</h1>
        <p className="text-sm text-gray-500">india</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-[#822fca] font-bold "} variant="ghost">
          12 positions
        </Badge>
        <Badge className={"text-blue-700 font-bold "} variant="ghost">
          Full Time
        </Badge>
        <Badge className={"text-red-700 font-bold "} variant="ghost">
          12 Lpa
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
