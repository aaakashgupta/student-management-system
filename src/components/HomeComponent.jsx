import { PiStudentFill } from "react-icons/pi";
import PrimaryButton from "./PrimaryButton";
import { FaArrowRight } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

export default function HomeComponent() {
  const navigate = useNavigate();

  function fun1() {
    // toast.error("wait we are preparing for your account..");
    // toast.success("Done.");
    // console.log("wait we are preparing for your account..");
    navigate("/show-students");
  }

  function fun2() {
    toast.success("called add student button");

    //write something
    // that can take use to add student page
    navigate("/add-student");
  }

  function fun3() {
    alert("fun3");
  }


  function fun4() {
    alert("fun4");
  }

  return (
    <div>
      <Navbar />
      <div className=" h-screen flex flex-col justify-center items-center gap-4">
        
        <PiStudentFill size={100} className="text-pink-600" />
        <h1 className="text-4xl font-semibold">Student Mangement Syst</h1>
        
        <p>This is a Student Management System</p>
        
        
        <div className="flex gap-2">
          <PrimaryButton
            icon={<FaArrowRight size={20} />}
            buttonClickFun={fun1}
          />

          <PrimaryButton
            buttonText="Add Student"

            buttonClickFun={fun2}
            icon={<PiStudentFill size={20} />}
          />
        </div>

        <div className=" fixed top-20 right-4 flex gap-2 ">
          <PrimaryButton
            buttonClickFun={fun3}
            icon={<BsYoutube size={20} />}
            buttonText="Subscribe Youtube Channel"
            className="  bg-red-800"
          />

          <PrimaryButton
            buttonClickFun={fun4}
            icon={<BsYoutube size={20} />}
            buttonText="Follow Instagram"
            className=" bg-pink-800 "
          />
        </div>
      </div>
    </div>
  );
}
