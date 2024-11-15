import React from "react";
import { Button } from "./ui/button";
import { BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router";
const jobId = "jhbjwhbxjwqxbq";
const Job = () => {
  const naviagte = useNavigate();

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 ">2 Days Ago</p>
        <Button className="rounded-full " size="icon" variant="outline">
          <BookMarked />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className=" p-6" size="icon" variant="outline">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium ">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold my-2">Software Engineer</h1>
        <p className=" text-sm text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vero
          nobis dolorem illo fugiat delectus ipsa hic error temporibus quam!
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
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => naviagte(`/job/description/${jobId}`)}
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
