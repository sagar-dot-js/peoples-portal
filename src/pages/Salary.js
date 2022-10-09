import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import SalarySlipCard from "../custom_components/SalarySlipCard";
const dropdownData = ["one", "two", "three"];

let invoiceCardData = [
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Dicution: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Dicution: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
];

const Salary = () => {
  return (
    <div className=" custom-px mb-[100px] ">
      <div className="flex flex-col justify-between   custom-py ">
        <p className=" text-[32px] text-[#1765DC]">Salary</p>
        <p className="text-[#8CB5F3]">
          Welcome to <span className="text-[#1765DC]">Mirats </span> Employee’s
          Dashboard
        </p>
      </div>
      <div className="">
        <div className="flex items-end gap-5">
          <Dropdown dropdownText="amsdhkjasdh" options={dropdownData} />
          <Dropdown dropdownText="amsdhkjasdh" options={dropdownData} />
          <a href="#" className="text-[#1765DC] underline">
            Clear Filter
          </a>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-5 2xl:grid-cols-6 gap-8">
        {invoiceCardData.map((item) => {
          return <SalarySlipCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default Salary;
