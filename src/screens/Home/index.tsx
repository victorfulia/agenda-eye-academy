import React from "react";
import Header from "../../components/Header";
import ActiveCourses from "../../components/ActiveCourses";
import CoursesSchedule from "../../components/CoursesSchedule";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <ActiveCourses />
      <CoursesSchedule />
    </div>
  );
};

export default Home;
