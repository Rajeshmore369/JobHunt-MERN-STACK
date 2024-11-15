import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl ">Devloper</h1>
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
          <Button
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#8244b8] hover:bg-[#7a05e0]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:{" "}
            <span className="pl-4 font-normal text-gray-800">
              Front End developer
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">Pune</span>
          </h1>
          <h1 className="font-bold my-1">
            Description:{" "}
            <span className="pl-4 font-normal text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              impedit quam voluptatibus eligendi corporis consequuntur facilis
              dolorum debitis tenetur inventore animi perspiciatis et, neque hic
              nemo quisquam sapiente aut. Accusamus.
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">0-2 years</span>
          </h1>
          <h1 className="font-bold my-1">
            salary:{" "}
            <span className="pl-4 font-normal text-gray-800">12LPA</span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:{" "}
            <span className="pl-4 font-normal text-gray-800">12</span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date:{" "}
            <span className="pl-4 font-normal text-gray-800">12-2-23</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
