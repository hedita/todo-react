import ReactDOM from "react-dom/client";
import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import TodoList from "./pages/TodoList/TodoList";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { StatusLengthContext } from "../StatusLengthContext";
import {
  DarkModeContext,
  DarkModeProvider,
} from "./pages/ConfigurationPage/DarkModeContext";

const App = () => {
  const [todosCount, setTodosCount] = useState({ all: 0, completed: 0 });
  const { darkMode } = useContext(DarkModeContext);

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
            <main
              className={darkMode ? "content dark-mode" : "content light-mode"}
            >
              <Header />
              <Navbar />
              <Routes>
                <Route path="/" element={<TodoList status={"all"} />} />
                <Route
                  path="uncompleted"
                  element={<TodoList status={"uncompleted"} />}
                />
                <Route
                  path="completed"
                  element={<TodoList status={"completed"} />}
                />
                <Route path="/add" element={<AddPage />} />
                <Route path="/configuration" element={<ConfigurationPage />} />
              </Routes>
            </main>
          </div>
        </StatusLengthContext.Provider>
      </DarkModeProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
