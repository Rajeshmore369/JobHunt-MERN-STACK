import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "@/redux/jobSlice";
import AdminJobTable from "./AdminJobTable.jsx";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div>
      <Navbar />
      <div className="f max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit "
            placeholder="filter by name and role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/job/create")}>New Job</Button>
        </div>
        {/* Job List */}
        <AdminJobTable />
      </div>
    </div>
  );
};

export default AdminJobs;
