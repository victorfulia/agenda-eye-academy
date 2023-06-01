import React from "react";
import Home from "./screens/Home";
import AppProvider from "./context";

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
};

export default App;
