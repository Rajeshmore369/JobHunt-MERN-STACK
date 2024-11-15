import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNo: user?.phoneNo,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form action="">
            <div className="grid gap-4 p-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={input.fullname}
                  className="col-span-3"
                  name="name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={input.email}
                  className="col-span-3"
                  name="email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="phoneNo" className="text-right">
                  phoneNo
                </Label>
                <Input
                  id="phoneNo"
                  value={input.phoneNo}
                  className="col-span-3"
                  name="phoneNo"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="bio" className="text-right">
                  bio
                </Label>
                <Input
                  id="bio"
                  value={input.bio}
                  className="col-span-3"
                  name="bio"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  value={input.skills}
                  className="col-span-3"
                  name="skills"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  value={input.file}
                  className="col-span-3"
                  accept="application/pdf"
                  type="file"
                  name="file"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="font-bold w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button type="submit" className="font-bold w-full my-4">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
