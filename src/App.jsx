import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import { Toaster } from "react-hot-toast";
import ShowStudents from "./components/ShowStudents";
import AddStudent from "./components/AddStudent";

function App() {
  const studentList = [
    {
      id: 1,
      name: "Rahul",
      college: "NIT Trichy",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "1234567890",
    },

    {
      id: 2,
      name: "Sachin",
      college: "IIT Delhi",
      course: "Btech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "9876543210",
    },
    {
      id: 3,
      name: "Rohan",
      college: "IIT Bombay",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "7418529630",
    },
    {
      id: 4,
      name: "Amit",
      college: "NIT Trichy",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "9638527410",
    },
    {
      id: 5,
      name: "Siddharth",
      college: "IIT Delhi",
      course: "Btech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "8529637410",
    },
    {
      id: 6,
      name: "Kunal",
      college: "IIT Bombay",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "7410985260",
    },
    {
      id: 7,
      name: "Rahul",
      college: "NIT Trichy",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "9638527410",
    },
    {
      id: 8,
      name: "Sachin",
      college: "IIT Delhi",
      course: "Btech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "9876543210",
    },
    {
      id: 9,
      name: "Rohan",
      college: "IIT Bombay",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "7418529630",
    },
    {
      id: 10,
      name: "Amit",
      college: "NIT Trichy",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "9638527410",
    },

    {
      id: 11,
      name: "Anupam",
      college: "GITM",
      course: "Mtech",
      image:
        "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
      phone: "9638527410",
    },
  ];

  return (
    <div>
      <Toaster />
      <HomeComponent />
      <ShowStudents studentList={studentList} />

      <AddStudent />
    </div>
  );
}

export default App;
