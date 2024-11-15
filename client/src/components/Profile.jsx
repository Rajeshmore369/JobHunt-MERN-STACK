import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["HTML", "CSS", "JavaScript", "React"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 ">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="text-lg font-medium"> Full Name</h1>
              <p className="font-sm text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, omnis.
              </p>
            </div>
          </div>
          <div>
            <Button
              onClick={() => setOpen(true)}
              variant="outline"
              className="text-right"
            >
              <Pen />
            </Button>
          </div>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>Rajesh@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 ">
            <Contact />
            <span>89123459821</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-md font-medium">Skills</h1>
          <div className=" flex items-center gap-2">
            {skills.length !== 0 ? (
              skills.map((item, idx) => <Badge key={idx}>{item}</Badge>)
            ) : (
              <p className="text-gray-600">No skills found.</p>
            )}
          </div>
        </div>
        <div className="grid w-full mx-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>

          {isResume ? (
            <a
              target="blank"
              href="https://github.com/"
              className="text-blue-500 w-full cursor-pointer hover:underline"
            >
              Resume
            </a>
          ) : (
            <span className="text-md">No Resume Found</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Add job cards here */}
        <AppliedJobTable />
      </div>
      {/* Update profile page */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
