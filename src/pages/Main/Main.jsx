import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import AddPage from "../AddPage/AddPage";
import TodoList from "../TodoList/TodoList";
import ConfigurationPage from "../ConfigurationPage/ConfigurationPage";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { DarkModeContext } from "../ConfigurationPage/DarkModeContext";

const Main = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <main className={`content ${darkMode ? "dark-mode" : ""}`}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList status={"all"} />} />
        <Route
          path="uncompleted"
          element={<TodoList status={"uncompleted"} />}
        />
        <Route path="completed" element={<TodoList status={"completed"} />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/configuration" element={<ConfigurationPage />} />
      </Routes>
    </main>
  );
};

export default Main;
