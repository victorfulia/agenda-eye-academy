import React from "react";
import Header from "../../components/Header";
import ActiveCourses from "../../components/ActiveCourses";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <ActiveCourses />
    </div>
  );
};

export default Home;
