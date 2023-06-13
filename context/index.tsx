import React from "react";
import { CoursesProvider } from "./courses";

interface Props {
  children: JSX.Element;
}

const AppProvider: React.FC<Props> = ({ children }) => (
  <CoursesProvider>{children}</CoursesProvider>
);

export default AppProvider;
