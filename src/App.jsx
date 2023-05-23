import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import TodoList from "./pages/TodoList/TodoList";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { StatusLengthContext } from "../StatusLengthContext";

const App = () => {
  const [allLength, setAllLength] = useState([]);
  const [completedLength, setCompletedLength] = useState([]);

  return (
    <BrowserRouter>
      <StatusLengthContext.Provider
        value={{
          allLength,
          setAllLength,
          completedLength,
          setCompletedLength
        }}
      >
        <div className="site-wrapper">
          <div className="container">
            <main className="content">
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
        </div>
      </StatusLengthContext.Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
