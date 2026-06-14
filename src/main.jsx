import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeComponent from "./components/HomeComponent.jsx";
import ShowStudents from "./components/ShowStudents.jsx";
import AddStudent from "./components/AddStudent.jsx";
import FeatureComponent from "./components/FeatureComponent.jsx";
import Counter from "./components/Counter.jsx";
import { Toaster } from "react-hot-toast";
import StudentProvider from "./context/StudentProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StudentProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/show-students" element={<ShowStudents />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/feature" element={<FeatureComponent />} />
        <Route path="/counter" element={<Counter />} />

        {/* n number of routes */}
      </Routes>
    </StudentProvider>
  </BrowserRouter>,
);
``;
