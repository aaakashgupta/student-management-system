import React from "react";
import Navbar from "./Navbar";

function FeatureComponent() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-4xl font-semibold text-center">
          WE PROVIDE SMART FEATURES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div className="bg-gray-800 p-5 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white">
              Automated Student Management
            </h2>
            <p className="text-gray-300">
              Our system provides automated student management features which
              include student registration, student profile management, student
              attendance management, student examination management, and student
              grading management.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white">
              Real-time Student Tracking
            </h2>
            <p className="text-gray-300">
              Our system provides real-time student tracking features which
              include tracking student location, tracking student attendance,
              tracking student performance, and tracking student behavior.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white">
              Student Performance Analysis
            </h2>
            <p className="text-gray-300">
              Our system provides student performance analysis features which
              include analysis of student grades, analysis of student
              performance, and analysis of student behavior.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white">
              Student Communication Management
            </h2>
            <p className="text-gray-300">
              Our system provides student communication management features
              which include student notification management, student messaging
              management, and student communication management.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white">
              Student Feedback Management
            </h2>
            <p className="text-gray-300">
              Our system provides student feedback management features which
              include management of student feedback, management of student
              suggestions, and management of student complaints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureComponent;
