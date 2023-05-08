import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPage from "./pages/AddPage/AddPage";
import AllPage from "./pages/AllPage/AllPage";
import CompletedPage from "./pages/CompletedPage/CompletedPage";
import UnCompletedPage from "./pages/UnCompletedPage/UnCompletedPage";
import ConfigurationPage from "./pages/ConfigurationPage/ConfigurationPage";
import Main from "./components/Navbar/Navbar";
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
            </main>
          </div>
        </div>
      </>
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/" element={<AllPage />} />
        <Route path="/completed" element={<CompletedPage />} />
        <Route path="/uncompleted" element={<UnCompletedPage />} />
        <Route path="/configuration" element={<ConfigurationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
