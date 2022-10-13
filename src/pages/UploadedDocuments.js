import React from "react";
import { TbLogout } from "react-icons/tb";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import { FiDownload } from "react-icons/fi";

let documentData = [
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
  {
    title: "Offer Letter",
    subTitle: "Sign Date",
    linkTitle: "11 Sept 2022",
    buttonTitle: "Upload",
  },
];

const UploadedDocuments = () => {
  return (
    <div className=" custom-px ">
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Documents and Legal</p>
          <p className="text-[#8CB5F3]">
            Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
            Employee’s Dashboard
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-5">
        {documentData.map((item, ind) => {
          return (
            <div className="w-[295px] h-[177px] custom-box-shadow2 p-3 rounded-[16px]">
              <div className="border-b mb-3">
                <p className="text-[18px] font-[700] pb-3">Offer Letter</p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[12px]">Sign Date </p>
                  <p className="text-[#1765DC]">11 Sept 2022</p>
                </div>
                <div className="flex  gap-5">
                  <button className="bg-[#1765DC] py-[8px] px-[16px] rounded-[8px] text-[#ffff] ">
                    Upload
                  </button>
                  <button className="bg-[#1765DC] py-[8px] px-[16px] rounded-[8px] text-[#ffff] ">
                    <FiDownload className="text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadedDocuments;
