import React from "react";
import Header from "../../components/Header";
import ActiveCourses from "../../components/ActiveCourses";
import CoursesSchedule from "../../components/CoursesSchedule";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <ActiveCourses />
      <CoursesSchedule />
      <Footer />
    </div>
  );
};

export default Home;
