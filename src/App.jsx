import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import TodoList from "./pages/TodoList/TodoList";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className="site-wrapper">
          <div className="container">
            <main className="content">
              <Header />
              <Navbar />
              <Routes>
                <Route path="/add" element={<AddPage />} />
                <Route path="/" element={<TodoList />} />
                <Route path="uncompleted" element={<TodoList />} />
                <Route path="completed" element={<TodoList />} />
                <Route path="/configuration" element={<ConfigurationPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
