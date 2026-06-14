import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import { useContext } from "react";
import StudentContext from "../context/StudentContext";

function AddStudent() {
  const [heading, setHeading] = useState("Add Student Here!");
  const [error, setError] = useState({
    name: "",
    phone: "",
    college: "",
    imageUrl: "",
    isError: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    imageUrl: "",
  });

  // const [students, setStudents] = useState([]);

  const { students, setStudents } = useContext(StudentContext);

  function handleFormField(fieldName, fieldValue) {
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //logic...

    const localErrors = {
      name: "",
      phone: "",
      college: "",
      imageUrl: "",
      isError: false,
    };

    //name ki validation

    if (formData.name == "") {
      localErrors.name = "Name is required";
      localErrors.isError = true;
    } else if (formData.name.length < 3) {
      localErrors.name = "Name should be at least 3 characters";
      localErrors.isError = true;
    }

    //phone ki validation
    if (formData.phone == "") {
      localErrors.phone = "Phone number is required";
      localErrors.isError = true;
    } else if (formData.phone.length < 10) {
      localErrors.phone = "Phone number should be at least 10 characters";
      localErrors.isError = true;
      // toast.error("Phone number should be at least 10 characters");
    }

    //check kar lunga
    //tab main change karunga

    //check to submit the form
    if (localErrors.isError) {
      toast.error("Please fill the form carefully");
      setError({
        ...localErrors,
      });
      return;
    } else {
      // toast.success("Form submitted successfully");
      setError({
        name: "",
        phone: "",
        college: "",
        imageUrl: "",
        isError: false,
      });
    }
    //validation for college and image url
    // email
    //password

    //submit
    setStudents([
      ...students,
      {
        ...formData,
        id: students.length + 1,
      },
    ]);

    setFormData({
      name: "",
      phone: "",
      college: "",
      imageUrl: "",
    });

    toast.success("Student added successfully");
  }

  function clearFields() {
    setFormData({
      name: "",
      phone: "",
      college: "",
      imageUrl: "",
    });
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center py-10">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-1/2 bg-gray-900 rounded-2xl flex  gap-4 flex-col py-10 p-5"
        >
          <h1 className="text-2xl text-white text-center font-semibold">
            {heading}
          </h1>
          <p className="text-gray-300 text-center">
            Fill the form carefully....
          </p>

          {/* {formData && (
            <div className="text-white">{JSON.stringify(formData)}</div>
          )} */}

          {/* {students.length > 0 && (
            <div>
              <h1 className="text-white">
                Number of students {students.length}
              </h1>
              <div className="text-white">{JSON.stringify(students)}</div>
            </div>
          )} */}

          {/* {error && <div className="text-red-500">{error.name}</div>} */}
          {/* username */}

          <div>
            <label htmlFor="" className="text-white p-3 ">
              Username
            </label>
            <input
              onChange={(event) => {
                handleFormField("name", event.target.value);
              }}
              value={formData.name}
              autoFocus
              type="text"
              placeholder="Enter name here"
              className="text-white py-2  focus:ring-0 focus:border-none bg-gray-800 rounded-2xl mt-2 px-4 w-full"
            />

            {error.name && (
              <p className="text-red-500 ml-2 mt-2">{error.name}</p>
            )}
          </div>

          {/* phone */}

          <div>
            <label htmlFor="" className="text-white p-3 ">
              Userphone
            </label>
            <input
              onChange={(event) => {
                handleFormField("phone", event.target.value);
              }}
              type="text"
              value={formData.phone}
              placeholder="Enter name here"
              className="text-white py-2 bg-gray-800 rounded-2xl mt-2 px-4 w-full"
            />
          </div>

          {error.phone && (
            <p className="text-red-500 ml-2 mt-2">{error.phone}</p>
          )}

          {/* College */}

          <div>
            <label htmlFor="" className="text-white p-3 ">
              College
            </label>
            <input
              onChange={(event) => {
                handleFormField("college", event.target.value);
              }}
              value={formData.college}
              type="text"
              placeholder="Enter name here"
              className="text-white py-2 bg-gray-800 rounded-2xl mt-2 px-4 w-full"
            />
          </div>

          {/* image url */}

          <div>
            <label htmlFor="" className="text-white p-3 ">
              Image url
            </label>
            <input
              onChange={(event) => {
                handleFormField("imageUrl", event.target.value);
              }}
              value={formData.imageUrl}
              type="text"
              placeholder="Enter name here"
              className="text-white py-2 bg-gray-800 rounded-2xl mt-2 px-4 w-full"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="submit"
              // onClick={() => {
              //   setHeading("Student Added Successfully");
              //   setError("This is error");
              // }}
              className="text-white bg-orange-500 px-3 py-2 rounded-2xl"
            >
              Add Student
            </button>
            {/* <PrimaryButton
              buttonClickFun={() => {
                setHeading("Student Added Successfully");
              }}
              buttonText="Add Student"
              className={"bg-orange-800"}
            /> */}

            <button
              type="button"
              onClick={clearFields}
              className="text-white bg-red-500 px-3 py-2 rounded-2xl"
            >
              Clear
            </button>
            {/* <PrimaryButton buttonText="Clear" className={"bg-red-800"} /> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
