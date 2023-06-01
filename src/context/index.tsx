import React from "react";
import { DataProvider } from "./data";

interface Props {
  children: JSX.Element;
}

const AppProvider: React.FC<Props> = ({ children }) => (
  <DataProvider>{children}</DataProvider>
);

export default AppProvider;
