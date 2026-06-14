import React, { useContext } from "react";
import StudentCard from "./StudentCard";
import Navbar from "./Navbar";
import StudentContext from "../context/StudentContext";

function ShowStudents() {
  //{
  // studentList = [
  //   {
  //     id: 1,
  //     name: "Rahul",
  //     college: "NIT Trichy",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "1234567890",
  //   },

  //   {
  //     id: 2,
  //     name: "Sachin",
  //     college: "IIT Delhi",
  //     course: "Btech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "9876543210",
  //   },
  //   {
  //     id: 3,
  //     name: "Rohan",
  //     college: "IIT Bombay",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "7418529630",
  //   },
  //   {
  //     id: 4,
  //     name: "Amit",
  //     college: "NIT Trichy",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "9638527410",
  //   },
  //   {
  //     id: 5,
  //     name: "Siddharth",
  //     college: "IIT Delhi",
  //     course: "Btech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "8529637410",
  //   },
  //   {
  //     id: 6,
  //     name: "Kunal",
  //     college: "IIT Bombay",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "7410985260",
  //   },
  //   {
  //     id: 7,
  //     name: "Rahul",
  //     college: "NIT Trichy",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "9638527410",
  //   },
  //   {
  //     id: 8,
  //     name: "Sachin",
  //     college: "IIT Delhi",
  //     course: "Btech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "9876543210",
  //   },
  //   {
  //     id: 9,
  //     name: "Rohan",
  //     college: "IIT Bombay",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "7418529630",
  //   },
  //   {
  //     id: 10,
  //     name: "Amit",
  //     college: "NIT Trichy",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "9638527410",
  //   },

  //   {
  //     id: 11,
  //     name: "Anupam",
  //     college: "GITM",
  //     course: "Mtech",
  //     image:
  //       "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  //     phone: "9638527410",
  //   },
  // ],
  //}
  const { students } = useContext(StudentContext);

  return (
    <div>
      <Navbar />
      <div className=" p-10  ">
        <h1 className="text-3xl text-center font-semibold">
          Student Count is {students.length}
        </h1>
        <p className="text-center text-sm">This is a list of students</p>

        <div className="flex flex-wrap justify-center mt-5">
          {students.map((student) => {
            return <StudentCard student={student} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowStudents;
