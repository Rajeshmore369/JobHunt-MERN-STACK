import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    area: [
      "Delhi",
      "Pune",
      "Mumbai",
      "Airoli",
      "Bangalore",
      "Hyderabad",
      "indor",
      "Navi Mumbai",
      "Thane",
      "Channei",
    ],
  },
  {
    filterType: "Industry",
    area: [
      "Frontend development",
      "BackEnd development",
      "Mobile development",
      "Data Science",
      "UX/UI Design",
      "QA/Testing",
      "Web Devloper",
    ],
  },
  {
    filterType: "Salary",
    area: ["0-40k", "40-60k", "60-80k", "1lakh to 5 lakh"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, idx) => (
          <div>
            <h1 className="text-lg font-bold">{data.filterType}</h1>
            {data.area.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
