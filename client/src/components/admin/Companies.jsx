import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable.jsx";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";

const Companies = () => {
  const [input, setInput] = useState("");
  useGetAllCompanies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  });
  return (
    <div>
      <Navbar />
      <div className="f max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit "
            placeholder="filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/companies/create")}>
            New Company
          </Button>
        </div>
        {/* Company List */}

        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
