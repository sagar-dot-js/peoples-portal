import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Speaker from "../assets/speaker.png";
import Avatar from "../components/Avatar/Avatar";
import Navlink from "../components/Navlink/Navlink";

const Header = () => {
  return (
    <>
      <div className="h-[70px]  custom-px flex items-center justify-between">
        <div>
          <img src={Logo} />
        </div>
        <div className=" flex  items-center">
          <div className="flex gap-5 items-center">
            <div>
              {" "}
              <img src={Speaker} />{" "}
            </div>
            <div className="border border-[#333333] px-[40px] py-2 rounded-3xl">
              {" "}
              Mirats ID
            </div>
            <div className="text-[#333333]">
              <p className="text-[20px] font-[400]">
                Good Morning,<span> Sagar</span>{" "}
              </p>
              <p className="text-[14px] ">Recruitment Coordinator</p>
            </div>
            <div>
              <Link to="/my-profile-details">
                <Avatar
                  type="img"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  variant="success"
                  size="lg"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" custom-gradient h-[59px] flex items-center justify-center">
        <div className="text-[#ffff] ">
          <nav>
            {/* <Navlink to="/dashboard">DASHBOARD</Navlink>
            <Navlink to="/attendance">ATTENDANCE</Navlink>
            <Navlink to="/leave">LEAVE</Navlink>
            <Navlink to="/salary">SALARY</Navlink>
            <Navlink to="/policies">POLICIES</Navlink>
            <Navlink to="/resignation">RESIGNATION</Navlink> */}
            <Navlink to="/">Dashboard</Navlink>
            <Navlink to="/attendance">Attendance</Navlink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
