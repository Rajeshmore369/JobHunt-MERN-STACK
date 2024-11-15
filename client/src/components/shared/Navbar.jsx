import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">
              Job <span className="text-[#F83002]">Portal</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <Link to={"/"}>Home</Link>
            <Link to={"/job"}>Jobs</Link>
            <Link to={"/browse"}>Browse</Link>
          </ul>
          {!user ? (
            <div className="flex gap-2 cursor-pointer">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  className="bg-[#6A38C2] text-white hover:text-white hover:bg-[#9675d0]"
                  variant="outline"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 mb-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className=" font-medium">Rajesh More</h4>
                    <p className="text-sm text-muted-foreground">
                      loraxbxjwqxwqk kjxnxwq
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">
                      <Link to={"/profile"}>View profile</Link>
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
