import React, { useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import { BsEye } from "react-icons/bs";
import { BiPencil, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";
import StudentContext from "../context/StudentContext";

function StudentCard({ student }) {
  const { students, setStudents } = useContext(StudentContext);

  function handleDelete() {
    const studentWitthoutDeleteOne = students.filter(
      (s) => s.id !== student.id,
    );

    setStudents(studentWitthoutDeleteOne);

    // setStudents(students.filter((s) => s.id !== student.id));
    toast.error("Student deleted successfully : " + student.id);
  }

  return (
    <div className="border w-1/4 p-6 rounded-xl flex flex-col gap-2 bg-gray-800 text-white relative">
      <div className="flex justify-center">
        <img className="h-24 w-24 rounded-full" src={student.imageUrl} alt="" />
      </div>
      <h1 className="text-2xl">{student.name}</h1>
      <div className="flex justify-between">
        <p className="text-sm">{student.phone}</p>
        <p className="text-sm">{student.college}</p>
      </div>

      <div className="flex gap-2 absolute top-4 right-4">
        <BsEye
          onClick={() => {
            toast.success("Hey , " + student.name);
          }}
          className="cursor-pointer"
        />
        <BiPencil className="cursor-pointer" />
        <BiTrash onClick={handleDelete} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default StudentCard;
