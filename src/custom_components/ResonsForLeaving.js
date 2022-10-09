import React from "react";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox/CheckBox";

const ResonsForLeaving = () => {
  return (
    <div className="w-[650px] text-[#666666] flex flex-col gap-5  border rounded-[24px] mx-auto mt-10 shadow-md p-5">
      <div className="">
        <p className="text-[20px] text-[#333333] font-[800] mb-4">
          Are you sure you want to resign a company?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, risus,
          bibendum purus nulla. Sit commodo ultrices neque fermentum ac lobortis
          amet imperdiet. Netus praesent imperdiet commodo tellus tortor et.
        </p>
      </div>
      <div>
        <p className="text-[20px] text-[#333333] font-[800]  mb-4">
          Reason for leaving{" "}
          <span className="text-[#666666]"> (required) </span>
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="flex justify-between border-b pb-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="border-b py-4">
            <div className="flex justify-between">
              {" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <CheckBox></CheckBox>{" "}
            </div>
            <p className="pt-3">
              Note : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nisl, risus, bibendum purus nulla. Sit commodo ultrices neque
              fermentum ac lobortis amet imperdiet. Netus praesent imperdiet
              commodo tellus tortor et.
            </p>
          </div>
          <div className="flex justify-between border-b py-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <CheckBox></CheckBox>
          </div>
          <div className="border-b py-4">
            <div className="flex justify-between">
              {" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <CheckBox></CheckBox>{" "}
            </div>
            <p className="pt-3">
              Note : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nisl, risus, bibendum purus nulla. Sit commodo ultrices neque
              fermentum ac lobortis amet imperdiet. Netus praesent imperdiet
              commodo tellus tortor et.
            </p>
          </div>
        </div>
      </div>
      <div className=" ml-auto flex items-center gap-5">
        <Button
          onClick={(e) => console.log("its working", e)}
          variant="outlined"
          customWidth="200px"
        >
          Cancel
        </Button>
        <Button
          className="sagar"
          onClick={(e) => console.log("its working", e)}
          variant="filled"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ResonsForLeaving;
