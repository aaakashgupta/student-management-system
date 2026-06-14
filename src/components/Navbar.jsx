import { PiStudentFill } from "react-icons/pi";
import React, { useContext } from "react";
import { HiHome, HiOutlineMegaphone } from "react-icons/hi2";
import { Link } from "react-router";
import StudentContext from "../context/StudentContext";

function Navbar() {
  const { students } = useContext(StudentContext);
  return (
    <nav className="h-16 bg-gray-900 text-gray-100 flex  justify-between px-10">
     <div className="flex items-center gap-3">
  <PiStudentFill size={50} className="text-white" />

  <h1 className="text-2xl font-semibold">
    Student Management
  </h1>
</div>
      <div className="flex gap-4  items-center  justify-center">
        
        <Link to={"/"}>
          <HiHome size={25} />
        </Link>
        <Link to="/feature">Feature</Link>
        <Link to="/show-students">Show Students</Link>
        <Link to="/add-student">Add Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;
