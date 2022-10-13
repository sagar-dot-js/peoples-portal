import { useState } from "react";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Link from "../components/Link/Link";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import HolidayCalendar from "../custom_components/HolidayCalendar";

import Table, {
  TableActionPopUp,
  TableBody,
  TableHead,
  TableRow,
  TableWithPagination,
  Td,
  Th,
} from "../components/Table/Table";
import Button from "../components/Button";

import TablePagination from "../components/Table/TablePagination";
import { TbLogout } from "react-icons/tb";
import Chip from "../components/Chips/Chip";
import { Chips } from "../components/Chips/Chip.style";
import UpcommingHolidays from "../custom_components/UpcommingHolidays";
import { Calendar } from "react-calendar";
import months from "../json-data/months.json";
import year from "../json-data/years.json";

const Leave = () => {
  const statusColors = {
    unseen: "error",
    seen: "primary",
    approved: "success",
  };

  const data = [
    {
      date: "25 - 09 - 2022",
      leavetype: "Monday",
      status: "Approved",
      remarks: "00:00:00 Am",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Wedesday",
      status: "Approved",
      remarks: "00:00:00 Am",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Friday",
      status: "Approved",
      remarks: "00:00:00 Am",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Sunday",
      status: "Approved",
      remarks: "00:00:00 Am",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Monday",
      status: "Approved",
      remarks: "00:00:00 Am",
    },
    {
      date: "25 - 09 - 2022",
      leavetype: "Tuesday",
      status: "Approved",
      remarks: "00:00:00 Am",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const surveyType = ["one", "two", "three"];

  const newmonth = months.map((item) => {
    return { label: item.name, value: item.abbreviation };
  });

  let cardData = [
    {
      title: "TOTAL LEAVE",
      subTitle: "24 ",
    },
    {
      title: "REMAINING LEAVE",
      subTitle: "00 ",
    },
    {
      title: "CASUAL LEAVE",
      subTitle: "11",
    },
    {
      title: "JSick Leave",
      subTitle: "15",
    },
    {
      title: "Unpaid Leave",
      subTitle: "68",
    },
  ];

  let leavetype = [
    {
      label: "Paid Leave",
      value: "paid leave",
    },
    {
      label: "Seak Leave",
      value: "Seak leave",
    },
  ];

  let status = [
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Approved",
      value: "Approved",
    },
  ];
  return (
    <div className=" custom-px ">
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Leave</p>
          <p className="text-[#8CB5F3]">
            Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
            Employee’s Dashboard
          </p>
        </div>
        <div className=" flex gap-5">
          <ButtonWithIcon variant="filledIcon" className="p-6">
            {<TbLogout />}Filled Icon Button
          </ButtonWithIcon>
        </div>
      </div>
      <div className=" ">
        <div className="flex  justify-between  2xl:w-[70%]">
          {cardData.map((item) => {
            return (
              <DisplayCard
                customWidth="200px"
                cardHeader={item.title}
                cardBody={item.subTitle}
              />
            );
          })}
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between w-full my-14">
        <div className=" w-[80%] 2xl:w-[50%] flex justify-between items-center ">
          <Dropdown dropdownText="Month" options={newmonth} />
          <Dropdown dropdownText="Year" options={year} />
          <Dropdown dropdownText="Leave type" options={leavetype} />
          <Dropdown dropdownText="Status" options={status} />
          <Link
            color="#1765DC"
            border="underline"
            href="https://scalablecss.com/styled-components-global-styles/"
          >
            Clear Filter
          </Link>
        </div>
      </div>
      {/*  */}
      <div className=" flex-col ">
        <TableActionPopUp selectedRows={selectedRows}>
          <Button
            onClick={(e) => console.log("its working", e)}
            variant="outlined"
            customWidth="200px"
            className="tableBtn mx-3"
          >
            Delete Request for Leave
          </Button>
        </TableActionPopUp>
        <TableWithPagination>
          <Table>
            <TableHead>
              <TableRow>
                <Th>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(data);
                      } else setSelectedRows([]);
                    }}
                  />
                </Th>
                <Th>Date</Th>
                <Th>Leave Type</Th>
                <Th>Remarks</Th>
                <Th>Status</Th>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice(
                  pageNumber * rowsPerPage - rowsPerPage,
                  pageNumber * rowsPerPage
                )
                .map((d, i) => {
                  return (
                    <TableRow key={i}>
                      <Td>
                        <input
                          type="checkbox"
                          checked={selectedRows.filter((r) => r.id === d.id)[0]}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows((prev) => [...prev, d]);
                            } else
                              setSelectedRows((prev) => {
                                return prev.filter((pd) => {
                                  return pd.id !== d.id;
                                });
                              });
                          }}
                        />
                      </Td>

                      <Td>{d.date}</Td>
                      <Td>{d.leavetype}</Td>
                      <Td>{d.remarks}</Td>
                      <Td>
                        {" "}
                        <Chip
                          variant="filled"
                          color={statusColors[d.status.toLowerCase()]}
                        >
                          {d.status}
                        </Chip>{" "}
                      </Td>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalDataCnt={data.length}
          />
        </TableWithPagination>
      </div>
      {/*  */}
      <div className="  w-full  mb-10 ">
        <div className="mb-[20px]">
          <p className="text-[32px]">Holiday</p>
        </div>
        <div className="w-full  flex gap-10  justify-between">
          <div className="border w-[500px]   justify-center items-center p-10 rounded-[24px]">
            <p className="text-[24px]">Calendar</p>
            <Calendar />
          </div>
          <div className="border w-[800px] justify-center items-center p-10 rounded-[24px]  ">
            <p className="text-[24px] mb-5">List of Holiday</p>
            <UpcommingHolidays />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
