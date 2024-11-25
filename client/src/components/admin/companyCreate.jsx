import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useState } from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setComapanyName] = useState();
  const dispatch = useDispatch();
  const RegisterNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        {
          companyName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const cId = res?.data?.company?._id;
        navigate(`/admin/companies/${cId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w04xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl ">Company Name</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2 "
          onChange={(e) => setComapanyName(e.target.value)}
          placeholder="company Name"
        />

        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={RegisterNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;