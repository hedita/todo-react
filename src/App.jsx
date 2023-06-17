import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StatusLengthContext } from "../StatusLengthContext";
import { DarkModeProvider } from "./pages/ConfigurationPage/DarkModeContext";
import Main from "./pages/Main/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <div className="site-wrapper">
              <Main />
            </div>
          </QueryClientProvider>
        </StatusLengthContext.Provider>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
