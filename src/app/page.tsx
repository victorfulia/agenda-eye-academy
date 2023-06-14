// Components
import Header from "../components/Header";
import ActiveCourses from "../components/ActiveCourses";
import CoursesSchedule from "../components/CoursesSchedule";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

// Comtext
import AppProvider from "../context";

export default function Home() {
  return (
    <AppProvider>
      <div className="h-screen">
        <Header />
        <ActiveCourses />
        <CoursesSchedule />
        <Skills />
        <Footer />
      </div>
    </AppProvider>
  );
}
