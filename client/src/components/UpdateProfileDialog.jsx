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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_END_API_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNo: user?.phoneNo,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNo", input.phoneNo);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_END_API_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    console.log(input);
    setOpen(false);
  };

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
          <form action="" onSubmit={submitHandler}>
            <div className="grid gap-4 p-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={input.fullname}
                  className="col-span-3"
                  type="text"
                  onChange={changeEventHandler}
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
                  type="email"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  name="email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="phoneNo" className="text-right">
                  phoneNo
                </Label>
                <Input
                  id="phoneNo"
                  type="text"
                  value={input.phoneNo}
                  className="col-span-3"
                  onChange={changeEventHandler}
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
                  onChange={changeEventHandler}
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
                  onChange={changeEventHandler}
                  name="skills"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlfor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  className="col-span-3"
                  accept="application/pdf"
                  onChange={changeFileHandler}
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
