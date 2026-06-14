import { useState } from "react";
import StudentContext from "./StudentContext";
const StudentProvider = ({ children }) => {
  //global state management for student data
  const [students, setStudents] = useState([]);
  //students -- variable
  //setStudents -- function to update the students variable

  //kis value --> kisko
  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
