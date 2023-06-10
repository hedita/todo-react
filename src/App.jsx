import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StatusLengthContext } from "../StatusLengthContext";
import { DarkModeProvider } from "./pages/ConfigurationPage/DarkModeContext";
import Main from "./pages/Main/Main";

const App = () => {
  const [todosCount, setTodosCount] = useState({ all: 0, completed: 0 });

  return (
    <BrowserRouter>
      <DarkModeProvider>
        <StatusLengthContext.Provider
          value={{
            todosCount,
            setTodosCount,
          }}
        >
          <div className="site-wrapper">
            <Main />
          </div>
        </StatusLengthContext.Provider>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
