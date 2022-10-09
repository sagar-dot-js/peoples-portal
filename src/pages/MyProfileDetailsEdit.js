import React, { useState } from "react";
import profilePhoto from "../assets/profile-pic.jpg";
import DocumentsAndLegal from "../custom_components/forms/DocumentsAndLegal";
import FinancialDetails from "../custom_components/forms/FinancialDetails";
import IdentityDetails from "../custom_components/forms/IdentityDetails";
import PersonalInformation from "../custom_components/forms/PersonalInformation";
import WorkDetails from "../custom_components/forms/WorkDetails";

let profileData = [
  {
    title: "Personal Information",
    icon: "",
  },
  {
    title: "Financial Details",
    icon: "",
  },
  {
    title: "Identity Details",
    icon: "",
  },
  {
    title: "Work Details",
    icon: "",
  },
  {
    title: "Documents and Legal",
    icon: "",
  },
];

const MyProfileDetailsEdit = () => {
  let [activeProfileTab, setActiveProfileTab] = useState(
    "Personal Information"
  );
  console.log(activeProfileTab);

  let getCorrectTab = (activeProfileTab) => {
    switch (activeProfileTab) {
      case "Personal Information":
        return <PersonalInformation />;

      case "Financial Details":
        return <FinancialDetails />;

      case "Identity Details":
        return <IdentityDetails />;

      case "Work Details":
        return <WorkDetails />;

      case "Documents and Legal":
        return <DocumentsAndLegal />;
    }
  };

  return (
    <div className=" custom-px custom-py  w-full flex justify-between ">
      <div className="w-[35%]  ">
        <div className="my-profile-card fixed">
          <div className=" flex items-center gap-5 p-3 h-[25%]  ">
            <div className="h-[80px] w-[80px] rounded-full border">
              <img
                src={profilePhoto}
                className="h-full w-full object-cover rounded-full"
              />{" "}
            </div>
            <div>
              <p className="text-[24px] text-[#333333] font-[700]">
                {" "}
                Sagar Borude
              </p>
              <p className="text-[#666666] text-[14px]">
                sagar.html5@gmail.com
              </p>
            </div>
          </div>
          <div className=" h-[75%] w-full  ">
            {profileData.map((item, ind) => {
              return (
                <div
                  className={`h-[20%] w-full  flex items-center gap-3 px-8  transition-all  cursor-pointer  ${
                    activeProfileTab === item.title && "active-profile-tab"
                  } `}
                  key={ind}
                  onClick={() => {
                    setActiveProfileTab(item.title);
                  }}
                >
                  <div className="h-[40px] w-[40px] rounded-full bg-[#D9D9D9]"></div>{" "}
                  <p className="text-[16px] transition-all hover:scale-105">
                    {" "}
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[65%]">
        {/* <PersonalInformation /> */}
        {/* <FinancialDetails /> */}
        {/* <IdentityDetails /> */}
        {/* <WorkDetails /> */}
        {/* <DocumentsAndLegal /> */}
        {getCorrectTab(activeProfileTab)}
      </div>
    </div>
  );
};

export default MyProfileDetailsEdit;
