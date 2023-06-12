import React from "react";

// Components
import Header from "../../components/Header";
import ActiveCourses from "../../components/ActiveCourses";
import CoursesSchedule from "../../components/CoursesSchedule";
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <ActiveCourses />
      <CoursesSchedule />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
