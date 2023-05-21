import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import TodoList from "./pages/TodoList/TodoList";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { StatusLengthContext } from "./StatusLengthContext";
import { useState } from "react";
const App = () => {
  const [length, setLength] = useState();

  return (
    <BrowserRouter>
      <StatusLengthContext.Provider value={{ length, setLength }}>
        <div className="site-wrapper">
          <div className="container">
            <main className="content">
              <Header />
              <Navbar />
              <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="uncompleted" element={<TodoList isDone={isDone}/>} />
                <Route path="completed" element={<TodoList isDone={isDone}/>} />
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
